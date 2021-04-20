import React, { useState, useCallback, useContext, useEffect } from 'react';
import { Card } from '../components/ui/Card';
import update from 'immutability-helper';
import { modulesDuration } from '../util/lessonFormUtil';
import Section from '../layout/Section';
import Spinner from '../components/ui/Spinner';
import Heading from '../components/ui/Heading';
import Button from '../components/ui/Button';
import CheckBoxList from '../components/ui/CheckBoxList';
import Select from '../components/ui/Select';
import TextAreaInput from '../components/ui/TextAreaInput';
import OptionsContext from '../context/options/optionsContext';
import LessonsContext from '../context/lessons/lessonsContext';

const LessonFormModules = ({ handleAdvanceStep, handleReverseStep }) => {
  const optionsContext = useContext(OptionsContext);
  const { modules, getModules, addCustomModule } = optionsContext;

  const lessonsContext = useContext(LessonsContext);
  const { buildLesson } = lessonsContext;

  const [formValues, setFormValues] = useState({});
  const [modulesList, setModulesList] = useState([]);
  const [myCheckedList, setMyCheckedList] = useState([]);
  const [customModule, setCustomModule] = useState('');
  const [selectedModulesDetails, setSelectedModulesDetails] = useState({});

  useEffect(() => {
    getModules();
  }, [getModules]);

  const moveCard = useCallback(
    (dragIndex, hoverIndex) => {
      const dragCard = modulesList[dragIndex];
      setModulesList(
        update(modulesList, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragCard],
          ],
        })
      );
    },
    [modulesList]
  );

  const renderCard = (card, index) => {
    return (
      <Card
        key={card.id}
        index={index}
        id={card.id}
        text={card.name}
        moveCard={moveCard}
      />
    );
  };

  useEffect(() => {
    if (formValues.modules?.length > 0) {
      const checkedLength = formValues.modules.length;
      const modulesListLength = modulesList.length;

      if (checkedLength > modulesListLength) {
        formValues.modules.forEach((item) => {
          if (modulesList.some((i) => i.id === item)) {
          } else {
            let addedModule = modules.find((formItem) => formItem.id === item);
            setModulesList((prevState) => [...prevState, addedModule]);
          }
        });
      } else {
        const modulesIdList = modulesList.map((item) => item.id);
        let removeItem = null;
        modulesIdList.forEach((item) => {
          if (formValues.modules.includes(item)) {
            // do nothing, is in the form list
          } else {
            removeItem = item;
          }
        });

        setModulesList((prevState) => [
          ...prevState.filter((item) => item.id !== removeItem),
        ]);

        setSelectedModulesDetails((prevState) => {
          const newData = { ...prevState };
          delete newData[removeItem];
          return newData;
        });
      }
    } else {
      if (formValues.modules?.length === 0) {
        setModulesList([]);
        setSelectedModulesDetails({});
      }
    }
  }, [formValues.modules, modules]);

  const inputHandler = useCallback((inputName, value) => {
    setFormValues((prevState) => {
      return { ...prevState, [inputName]: value };
    });
  }, []);

  const handleAddCustomModule = () => {
    const number = modules.length;
    const newModule = {
      id: number + 1,
      name: customModule,
    };
    addCustomModule(newModule);
    setMyCheckedList((prevState) => [...prevState, newModule.id]);
    setCustomModule('');
  };

  const handleCustomModuleChange = (event) => {
    setCustomModule(event.target.value);
  };

  const handleModuleDetails = useCallback((inputName, value) => {
    const detailInput = inputName.split('-');
    const modNumber = detailInput[0];
    const modPart = detailInput[1];

    const detailObject = { [modPart]: value };
    setSelectedModulesDetails((prevState) => {
      return {
        ...prevState,
        ...{ [modNumber]: { ...prevState[modNumber], ...detailObject } },
      };
    });
  }, []);

  const buildModuleList = () => {
    let modules_detail = '<ul>';

    modules_detail += modulesList.map((module) => {
      let modNumber = module.id;
      let modName = module.name.replace(/\s+/g, '-').toLowerCase();

      let singleModDetail = '';
      Object.entries(selectedModulesDetails).forEach(([key, value]) => {
        if (parseInt(key) === modNumber) {
          singleModDetail += `<li id='mod-${modName}'><p><strong>${modName
            .split('-')
            .join(' ')}</strong></p><p>${value.time} minutes</p><p>details: ${
            value.text
          }</p></li>`;
        }
      });

      return singleModDetail;
    });

    modules_detail += '</ul>';

    return modules_detail;
  };

  const handleSaveModules = () => {
    const mods = buildModuleList();
    const lessonMods = mods.replace(/,/g, '');

    buildLesson('modules_details', lessonMods);
  };

  return (
    <Section>
      <Section>
        <Heading size='h2'>Modules Details</Heading>
        <div className='container mx-auto px-4'>
          <h1 className='text-3xl'>Build Modules</h1>
          <div>
            <div className='mt-8 mb-8 grid grid-cols-1 md:grid-cols-4 gap-6 items-start'>
              <div className='grid grid-cols-1 col-span-1 gap-6'>
                {modules ? (
                  <>
                    <CheckBoxList
                      listName={'modules'}
                      items={modules}
                      onInput={inputHandler}
                      checkedList={myCheckedList}
                    />
                    <input
                      type='text'
                      value={customModule}
                      id='custom_module'
                      name='custom_module'
                      onChange={handleCustomModuleChange}
                    />
                    <button
                      type='button'
                      disabled={!customModule}
                      onClick={handleAddCustomModule}
                    >
                      Add Custom Module
                    </button>
                  </>
                ) : (
                  <Spinner />
                )}
              </div>
              {modulesList && modulesList.length > 0 ? (
                <>
                  <div className='grid grid-cols-1 gap-6'>
                    <div className='w-full'>
                      {modulesList.map((module, i) => renderCard(module, i))}
                    </div>
                  </div>
                  <div className='grid grid-cols-1 col-span-2 gap-6'>
                    {modulesList.map((mod) => (
                      <div key={mod.id}>
                        <h5>{mod.name}</h5>
                        <TextAreaInput
                          inputName={`${mod.id}-text`}
                          onInput={handleModuleDetails}
                          initialValue={mod.acf.description}
                        />
                        <Select
                          name={`${mod.id}-time`}
                          optionList={modulesDuration}
                          onSelect={handleModuleDetails}
                        />
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <div>Select at least one module</div>
              )}
            </div>
          </div>
        </div>
        {/* save modules to lesson context */}
        <button
          className='inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 cursor-pointer disabled:cursor-default disabled:bg-gray-400'
          onClick={handleSaveModules}
        >
          Save Modules
        </button>
      </Section>
      <div className='flex justify-between mt-4'>
        <Button handleClick={handleReverseStep} buttonText='Previous Step' />
        <Button handleClick={handleAdvanceStep} buttonText='Next Step' />
      </div>
    </Section>
  );
};

export default LessonFormModules;
