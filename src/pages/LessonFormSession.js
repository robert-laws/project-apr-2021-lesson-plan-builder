import React, { useState, useCallback, useContext, useEffect } from 'react';
import Section from '../layout/Section';
import Heading from '../components/ui/Heading';
import Button from '../components/ui/Button';
import Select from '../components/ui/Select';
import DatePicker from '../components/ui/DatePicker';
import NumberPicker from '../components/ui/NumberPicker';
import RadioButtonList from '../components/ui/RadioButtonList';
import TextInput from '../components/ui/TextInput';
import TextAreaInput from '../components/ui/TextAreaInput';
import CheckBoxList from '../components/ui/CheckBoxList';
import TextInputCollection from '../components/ui/TextInputCollection';
import { setIntervals } from '../util/lessonFormUtil';
import LessonsContext from '../context/lessons/lessonsContext';
import OptionsContext from '../context/options/optionsContext';

const LessonFormSession = ({ handleAdvanceStep, handleReverseStep }) => {
  const [formInvalid, setFormInvalid] = useState(true);

  const lessonsContext = useContext(LessonsContext);
  const { buildLesson } = lessonsContext;

  const optionsContext = useContext(OptionsContext);
  const {
    informationLiteracyObjectives,
    thresholdConcepts,
    librarians,
    getInformationLiteracyObjectives,
    getThresholdConcepts,
    getLibrarians,
  } = optionsContext;

  const [durations, setDurations] = useState(null);

  useEffect(() => {
    const myDurations = setIntervals(5, 75, 5);
    setDurations(myDurations);
  }, []);

  useEffect(() => {
    getInformationLiteracyObjectives();
    getThresholdConcepts();
    getLibrarians();
  }, [getInformationLiteracyObjectives, getThresholdConcepts, getLibrarians]);

  const inputHandler = useCallback(
    (inputName, value) => {
      buildLesson(inputName, value);
    },
    [buildLesson]
  );

  return (
    <Section>
      <Heading size='h2'>Session Details</Heading>
      <Section>
        <div className='mt-8 grid grid-cols-1 md:grid-cols-6 gap-6 items-start'>
          <div className='grid grid-cols-1 gap-6'>
            {/* Class Date */}
            <DatePicker inputName='session_date' onInput={inputHandler} />
          </div>
          <div className='grid grid-cols-1 gap-6'>
            {/* Class Duration */}
            {durations && (
              <Select
                optionList={durations}
                onSelect={inputHandler}
                name='duration'
                initialText={'Select a session length'}
              />
            )}
          </div>
          <div className='grid grid-cols-1 gap-6'>
            {/* Number of Learners */}
            <NumberPicker
              inputName='number_of_learners'
              onInput={inputHandler}
              initialValue={''}
              placeholder={'# Students'}
            />
          </div>
          <div className='grid grid-cols-1 gap-6'>
            {/* Librarians */}
            {librarians && (
              <RadioButtonList
                listName='librarians'
                items={librarians}
                onInput={inputHandler}
                checkedList={[]}
              />
            )}
          </div>
          <div className='grid grid-cols-1 col-span-2 gap-6'>
            {/* Class Assignment */}
            <TextInput
              inputName={'co_instructor'}
              onInput={inputHandler}
              placeholder={'Co-Instructor'}
              initialValue={''}
            />
          </div>
        </div>

        <div className='mt-8 grid grid-cols-1 md:grid-cols-1 gap-6 items-start'>
          <div className='grid grid-cols-1 gap-6'>
            {/* Class Assignment */}
            <TextAreaInput
              inputName={'class_assignment'}
              onInput={inputHandler}
              placeholder={
                'Describe the main assignment which the information literacy session will address.'
              }
              initialValue={''}
            />
          </div>
        </div>

        <hr className='mt-8 mb-4' />

        <div className='mt-8 grid grid-cols-1 md:grid-cols-1 gap-6 items-start'>
          <div className='grid grid-cols-1 gap-6'>
            <h2 className='text-2xl'>
              Information Literacy Objectives & Threshold Concepts
            </h2>
          </div>
        </div>

        <div className='mt-8 grid grid-cols-1 md:grid-cols-4 gap-6 items-start'>
          <div className='grid grid-cols-1 lg:col-span-2 md:col-span-2 sm:col-span-4 col-span-4 gap-6'>
            {informationLiteracyObjectives && (
              <CheckBoxList
                listName={'information_literacy_objectives'}
                items={informationLiteracyObjectives}
                onInput={inputHandler}
                checkedList={[]}
              />
            )}
          </div>
          <div className='grid grid-cols-1 lg:col-span-2 md:col-span-2 sm:col-span-4 col-span-4 gap-6'>
            {thresholdConcepts && (
              <CheckBoxList
                listName={'threshold_concepts'}
                items={thresholdConcepts}
                onInput={inputHandler}
                checkedList={[]}
              />
            )}
          </div>
        </div>

        <hr className='mt-8 mb-4' />
        <div className='mt-8 grid grid-cols-1 md:grid-cols-1 gap-6 items-start'>
          <div className='grid grid-cols-1 gap-6'>
            <h2 className='text-2xl'>Learning Outcomes</h2>
          </div>
        </div>

        <div className='mt-8 grid grid-cols-1 gap-6 items-start'>
          <div className='grid grid-cols-1 gap-6'>
            {/* Learning Outcomes */}
            <TextInputCollection
              listName='learning_outcomes'
              onInput={inputHandler}
              placeholder={'Learning Outcome'}
            />
          </div>
        </div>

        <hr className='mt-8 mb-4' />
        <div className='mt-8 grid grid-cols-1 md:grid-cols-1 gap-6 items-start'>
          <div className='grid grid-cols-1 gap-6'>
            <h2 className='text-2xl'>Resources</h2>
          </div>
        </div>

        <div className='mt-8 grid grid-cols-1 gap-6 items-start'>
          <div className='grid grid-cols-1 gap-6'>
            {/* Resources */}
            <TextInputCollection
              listName='resources'
              onInput={inputHandler}
              placeholder={'Resources'}
            />
          </div>
        </div>
      </Section>
      <div className='flex justify-between mt-4'>
        <Button handleClick={handleReverseStep} buttonText='Previous Step' />
        <Button
          handleClick={handleAdvanceStep}
          buttonText='Next Step'
          invalidForm={formInvalid}
        />
      </div>
    </Section>
  );
};

export default LessonFormSession;
