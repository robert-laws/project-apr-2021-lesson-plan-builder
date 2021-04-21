import React, { useState, useCallback, useContext, useEffect } from 'react';
import Section from '../layout/Section';
import Heading from '../components/ui/Heading';
import Spinner from '../components/ui/Spinner';
import Button from '../components/ui/Button';
import Select from '../components/ui/Select';
import DatePicker from '../components/ui/DatePicker';
import NumberPicker from '../components/ui/NumberPicker';
import RadioButtonList from '../components/ui/RadioButtonList';
import TextInput from '../components/ui/TextInput';
import TextAreaInput from '../components/ui/TextAreaInput';
import CheckBoxList from '../components/ui/CheckBoxList';
import TextListCollection from '../components/ui/TextListCollection';
import { setIntervals } from '../util/lessonFormUtil';
import LessonsContext from '../context/lessons/lessonsContext';
import OptionsContext from '../context/options/optionsContext';

const LessonFormSession = ({ handleAdvanceStep, handleReverseStep }) => {
  const [formInvalid, setFormInvalid] = useState(true);

  const lessonsContext = useContext(LessonsContext);
  const { buildLesson, newLesson } = lessonsContext;

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

  useEffect(() => {
    if (newLesson) {
      if (
        newLesson.hasOwnProperty('librarians') &&
        newLesson.hasOwnProperty('session_date') &&
        newLesson.hasOwnProperty('duration') &&
        newLesson.hasOwnProperty('number_of_learners')
      ) {
        if (
          newLesson.librarians.length > 0 &&
          newLesson.session_date.length > 0 &&
          newLesson.duration.length > 0 &&
          newLesson.number_of_learners.length > 0
        ) {
          setFormInvalid(false);
        } else {
          setFormInvalid(true);
        }
      }
    }
  }, [newLesson]);

  return (
    <Section>
      <Section>
        <Heading size='h2'>Session Details</Heading>
        <div className='mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-start'>
          <div className='grid grid-cols-1 gap-6'>
            {/* Class Date */}
            <DatePicker
              inputName='session_date'
              labelName='Session Date'
              onInput={inputHandler}
              required={true}
            />
          </div>
          <div className='grid grid-cols-1 gap-6'>
            {/* Class Duration */}
            {durations && (
              <Select
                optionList={durations}
                labelName='Session Duration'
                onSelect={inputHandler}
                name='duration'
                initialText={'Select a session length'}
                required={true}
              />
            )}
          </div>
          <div className='grid grid-cols-1 gap-6'>
            {/* Number of Learners */}
            <NumberPicker
              inputName='number_of_learners'
              labelName='Number of Learners'
              onInput={inputHandler}
              initialValue={''}
              placeholder={'# Students'}
              required={true}
            />
          </div>
        </div>
        <div className='mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-start'>
          <div className='grid grid-cols-1 gap-6'>
            {/* Librarians */}
            {librarians ? (
              <RadioButtonList
                listName='librarians'
                labelName='Librarians'
                items={librarians}
                onInput={inputHandler}
                checkedList={[]}
                required={true}
              />
            ) : (
              <Spinner position='left' />
            )}
          </div>
          <div className='grid grid-cols-1 gap-6'>
            {/* Class Assignment */}
            <TextInput
              inputName={'co_instructor'}
              labelName='Co-Instructor'
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
              labelName='Class Assignment'
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
            <Heading size='h2'>
              Information Literacy Objectives & Threshold Concepts
            </Heading>
          </div>
        </div>

        <div className='mt-8 grid grid-cols-1 md:grid-cols-4 gap-6 items-start'>
          <div className='grid grid-cols-1 lg:col-span-2 md:col-span-2 sm:col-span-4 col-span-4 gap-6'>
            {informationLiteracyObjectives ? (
              <CheckBoxList
                listName={'information_literacy_objectives'}
                labelName='Information Literacy Objectives'
                items={informationLiteracyObjectives}
                onInput={inputHandler}
                checkedList={[]}
              />
            ) : (
              <Spinner position='left' />
            )}
          </div>
          <div className='grid grid-cols-1 lg:col-span-2 md:col-span-2 sm:col-span-4 col-span-4 gap-6'>
            {thresholdConcepts ? (
              <CheckBoxList
                listName={'threshold_concepts'}
                labelName='Threshold Concepts'
                items={thresholdConcepts}
                onInput={inputHandler}
                checkedList={[]}
              />
            ) : (
              <Spinner position='left' />
            )}
          </div>
        </div>

        <hr className='mt-4 mb-6' />
        <div className='mt-2 grid grid-cols-1 md:grid-cols-1 gap-6 items-start'>
          <div className='grid grid-cols-1 gap-6'>
            <Heading size='h2'>Learning Outcomes</Heading>
          </div>
        </div>

        <div className='mt-2 grid grid-cols-1 gap-6 items-start'>
          <div className='grid grid-cols-1 gap-6'>
            {/* Learning Outcomes */}
            <TextListCollection
              listName='learning_outcomes'
              onInput={inputHandler}
              placeholder={'Add a Learning Outcome'}
            />
          </div>
        </div>

        <hr className='mt-8 mb-6' />
        <div className='mt-2 grid grid-cols-1 md:grid-cols-1 gap-6 items-start'>
          <div className='grid grid-cols-1 gap-6'>
            <Heading size='h2'>Resources</Heading>
          </div>
        </div>

        <div className='mt-2 grid grid-cols-1 gap-6 items-start'>
          <div className='grid grid-cols-1 gap-6'>
            {/* Resources */}
            <TextListCollection
              listName='resources'
              onInput={inputHandler}
              placeholder={'Add a Resource'}
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
