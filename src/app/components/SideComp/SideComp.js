'use client'
import Link from 'next/link';
import React from 'react';

function SideComp(props) {
  const [isHovering, setIsHovering] = React.useState(false);

  return (
    <div className='hidden md:block ml-10'>
      <Link href="/create" className='no-underline'>
        <div className='flex justify-center items-center w-24 h-24 bg-black rounded-full sticky top-24'
          onMouseOver={() => {
            setIsHovering(true);
          }}
          onMouseOut={() => {
            setIsHovering(false);
          }}
        >
          <div className='font-thin text-white text-3xl'>
            +
          </div>
        </div>
      </Link>

    </div>
  );
}

export default SideComp;