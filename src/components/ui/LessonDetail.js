import React from 'react';
import DetailLine from './DetailLine';
import DetailList from './DetailList';
import DetailMultiLine from './DetailMultiLine';

const LessonDetail = ({
  librarians,
  thresholdConcepts,
  informationLiteracyObjectives,
  numberOfLearners,
  lessonDuration,
  classAssignment,
  lessonLibrarian,
  coInstructor,
  resources,
  learningOutcomes,
  lessonThresholdConcepts,
  lessonInformationLiteracyObjectives,
  modulesDetails,
}) => {
  const matchAndGetNames = (namesArray, contextArray) => {
    let values = null;
    if (namesArray.length > 0) {
      values = namesArray.map((id) => {
        let item = contextArray.find((item) => item.id === parseInt(id));
        return item.name;
      });
    }
    return values;
  };

  return (
    <div className='mt-4 flex-1'>
      <DetailLine
        entryTitle='Number of Students'
        entryData={numberOfLearners}
      />
      <DetailLine entryTitle='Lesson Duration' entryData={lessonDuration} />
      <DetailLine entryTitle='Target Assignment' entryData={classAssignment} />
      <DetailLine
        entryTitle='Librarian'
        entryData={matchAndGetNames(lessonLibrarian, librarians)}
      />
      <DetailLine entryTitle='Co-Instructor' entryData={coInstructor} />
      <DetailMultiLine entryTitle='Resources' entryData={resources} />
      <DetailMultiLine
        entryTitle='Learning Outcomes'
        entryData={learningOutcomes}
      />
      <DetailList
        entryTitle='Threshold Concepts'
        entryData={matchAndGetNames(lessonThresholdConcepts, thresholdConcepts)}
      />
      <DetailList
        entryTitle='Information Literacy Objectives'
        entryData={matchAndGetNames(
          lessonInformationLiteracyObjectives,
          informationLiteracyObjectives
        )}
      />
      <DetailMultiLine entryTitle='Modules' entryData={modulesDetails} />
    </div>
  );
};

export default LessonDetail;
