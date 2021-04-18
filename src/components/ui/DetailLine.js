import React from 'react';

const DetailLine = ({ entryTitle, entryData }) => {
  return (
    <div className='w-full mb-10 md:mb-0 pb-2'>
      <h5 className='inline-block font-bold title-font mb-2 text-gray-900'>
        {entryTitle}
      </h5>
      <p className='inline-block leading-relaxed text-base ml-2'>{entryData}</p>
    </div>
  );
};

export default DetailLine;
