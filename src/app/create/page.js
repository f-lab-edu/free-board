'use client'
import { Input } from '@mui/material';
import React from 'react';

export default function Create(props) {
  const handelDes = (e) => {
    console.log(e.target)
  }
  return (
    <div className='py-10'>
      <textarea
        className='w-60 border border-gray-300 rounded-lg resize-none p-2.5'
        onChange={handelDes}
        id="text"
        name="text"
        rows={4}
        cols={33}
      >
      </textarea>
    </div>
  );
}