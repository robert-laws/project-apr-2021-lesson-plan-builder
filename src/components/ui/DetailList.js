import React from 'react';

const DetailList = ({ entryTitle, entryData }) => {
  return (
    <div className='w-full mb-10 md:mb-0 pb-4'>
      <h5 className='inline-block font-bold title-font mb-2 text-gray-900'>
        {entryTitle}
      </h5>
      <div className='leading-relaxed text-base ml-2'>
        {entryData ? (
          <div className='detail-multi-line ml-8'>
            <ul>
              {entryData.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ) : (
          <div className='ml-5 italic'>no information</div>
        )}
      </div>
    </div>
  );
};

export default DetailList;
