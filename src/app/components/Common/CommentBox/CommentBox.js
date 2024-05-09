import React from 'react';

export default function CommentBox({
  selectedComment
}) {
  return (
    <div className='p-5 mt-3 ml-4 w-full max-w-sm min-w-60 h-min max-h-screen bg-black rounded-lg sticky top-16 text-[14px] text-white'>
      {selectedComment.map((data, idx) => {
        return <>
          <div className='font-bold' key={idx}>
            {data.id}
          </div>
          <div>
            {data.content}
          </div>
        </>
      })}
    </div>
  );
}
