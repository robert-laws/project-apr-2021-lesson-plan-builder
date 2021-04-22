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

  const createDetailsList = (details) => {
    let detailParts = details.split('\n');
    let list = '<ul>';

    list += detailParts.map((detail) => `<li>${detail}</li>`);

    list += '</ul>';
    return list;
  };

  const buildModuleList = () => {
    let modules_detail =
      '<table><thead><tr><th></th><th>Name</th><th>Details</th><th>Time</th></tr></thead><tbody>';

    modules_detail += modulesList.map((module, index) => {
      let modNumber = module.id;
      let modName = module.name.replace(/\s+/g, '-').toLowerCase();

      let singleModDetail = '';

      Object.entries(selectedModulesDetails).forEach(([key, value]) => {
        if (parseInt(key) === modNumber) {
          singleModDetail += `<tr id='mod-${modName}'><td>${
            index + 1
          }</td><td><strong>${modName
            .split('-')
            .join(' ')}</strong></td><td>${createDetailsList(
            value.text
          )}</td><td>${value.time ? `${value.time} minutes` : ''}</td></tr>`;
        }
      });

      return singleModDetail;
    });

    modules_detail += '</tbody></table>';

    return modules_detail;
  };

  const handleSaveModules = () => {
    const mods = buildModuleList();
    const lessonMods = mods.replace(/,/g, '');

    buildLesson('modules_details', lessonMods);

    handleAdvanceStep();
  };

  return (
    <Section>
      <Section>
        <Heading size='h2'>Modules</Heading>
        <Heading size='h3'>Select at least one module</Heading>
        <div className='container mx-auto px-4'>
          <div>
            <div className='mt-8 mb-8'>
              {modules ? (
                <div className='bg-gray-100 px-8 py-4 rounded-md border border-gray-200'>
                  <CheckBoxList
                    listName={'modules'}
                    labelName=''
                    items={modules}
                    onInput={inputHandler}
                    checkedList={myCheckedList}
                    orientation='horizontal'
                  />
                  <div className='grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1 grid-cols-1 gap-4 md:gap-4 sm:gap-0 items-center mt-2'>
                    <div className='grid grid-cols-1 col-span-3 sm:mb-4'>
                      <input
                        type='text'
                        className='mt-3 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50'
                        value={customModule}
                        id='custom_module'
                        name='custom_module'
                        onChange={handleCustomModuleChange}
                        placeholder='Add a Custom Module'
                      />
                    </div>
                    <div className='grid grid-cols-1'>
                      <Button
                        buttonText='Add a Custom Module'
                        invalidForm={!customModule}
                        handleClick={handleAddCustomModule}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <Spinner />
              )}
            </div>
            {modulesList && modulesList.length > 0 ? (
              <div className='grid grid-cols-2 gap-2 pr-4 pt-3 border-t border-gray-200'>
                <div className='grid grid-cols-1 col-span-2 lg:col-span-1 sm:col-span-2 gap-2 px-4 lg:border-r sm:border-0 border-gray-200 h-full'>
                  <div className='w-full'>
                    <Heading size='h2'>Sort Modules</Heading>
                    <Heading size='h3'>Drag the module to reorder it</Heading>
                    <hr className='my-4 mr-2' />
                    <div className='mt-4 bg-gray-100 rounded-md border border-dashed border-gray-200 p-3'>
                      {modulesList.map((module, i) => renderCard(module, i))}
                    </div>
                  </div>
                </div>
                <div className='grid grid-cols-1 col-span-2 lg:col-span-1 sm:col-span-2  lg:border-0 sm:border-t pl-2'>
                  <Heading size='h2'>Edit Modules Time and Description</Heading>
                  <Heading size='h3'>
                    Add the time for each module and description of content
                    covered
                  </Heading>
                  <hr className='my-4' />
                  <div className='bg-gray-100 rounded-md border border-dashed border-gray-200 p-3'>
                    {modulesList.map((mod, index) => (
                      <div
                        key={mod.id}
                        className={`${
                          index > 0
                            ? 'border-t border-gray-200 border-dashed pt-4 mt-6'
                            : 'mt-3'
                        }`}
                      >
                        <div className='flex w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-start mb-1'>
                          <div className='flex-1'>
                            <Heading size='h3'>
                              {index + 1}. {mod.name}
                            </Heading>
                          </div>
                          <Select
                            name={`${mod.id}-time`}
                            optionList={modulesDuration}
                            onSelect={handleModuleDetails}
                            hideLabel={true}
                            initialText={'Module Time'}
                          />
                        </div>
                        <div className='relative flex-grow w-full mb-4'>
                          <TextAreaInput
                            labelName=''
                            inputName={`${mod.id}-text`}
                            onInput={handleModuleDetails}
                            initialValue={mod.acf?.description || ''}
                            placeholder={'Describe what will be taught'}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : modules ? (
              <div className='h-24 flex justify-center items-center'>
                <Heading size='h3'>
                  Select at least one module to continue
                </Heading>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
        {/* save modules to lesson context */}
      </Section>
      <div className='flex justify-between mt-4'>
        <Button handleClick={handleReverseStep} buttonText='Previous Step' />
        <Button
          handleClick={handleSaveModules}
          buttonText='Next Step'
          invalidForm={modulesList.length === 0 ? true : false}
        />
      </div>
    </Section>
  );
};

export default LessonFormModules;
