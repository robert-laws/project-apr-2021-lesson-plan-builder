import React from 'react';

const DetailMultiLine = ({ entryTitle, entryData }) => {
  return (
    <div className='w-full mb-10 md:mb-0 pb-2'>
      <h5 className='inline-block font-bold title-font mb-2 text-gray-900'>
        {entryTitle}
      </h5>
      <div className='leading-relaxed text-base ml-2'>
        {entryData ? (
          <div
            className='detail-multi-line ml-8'
            dangerouslySetInnerHTML={{ __html: entryData }}
          />
        ) : (
          <div className='ml-5 italic'>no information</div>
        )}
      </div>
    </div>
  );
};

export default DetailMultiLine;
