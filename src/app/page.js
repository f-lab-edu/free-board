'use client'
import React, { useState, useEffect, use } from 'react';
import ContentBox from "./components/Common/ContentBox/ContentBox";
import SideComp from "./components/SideComp/SideComp";
import { dataList } from "./dataList";
import moment from 'moment';
import 'moment/locale/ko';
import Link from "next/link";
import CommentBox from './components/Common/CommentBox/CommentBox';
import { Avatar } from '@mui/material';

moment().locale('ko');

export default function Home() {
  const [selectedCommentId, setSelectedCommentId] = useState("");
  const [selectedComment, setSelectedComment] = useState([]);
  useEffect(() => {
    console.log("selectedCommentId: ", selectedCommentId);
    if (selectedCommentId === "") {
      setSelectedComment([]);
    } else {
      dataList.map((data) => {
        if (data.id === selectedCommentId) {
          setSelectedComment(data.comment);
        };
      });
    };
  }, [selectedCommentId])
  return (
    <div className="flex">
      <div >
        <Link href="/create" className='no-underline'>
          <div className="mt-3 flex justify-center items-center w-full h-8 md:hidden rounded-lg bg-black text-white font-thin sticky top-16 z-50">
            +
          </div>
        </Link>
        {dataList.map((data, idx) => {
          return <ContentBox
            key={idx}
            data={data}
            selectedCommentId={selectedCommentId}
            setSelectedCommentId={setSelectedCommentId}
          />
        })}
      </div>
      {selectedCommentId !== ""
        ?
        <div className='p-5 mt-3 ml-4 w-full max-w-sm min-w-60 h-min max-h-screen bg-black rounded-lg sticky top-16 text-gray-400'>
          {selectedComment.map((data, idx) => {
            return <div className='mb-4'>
              <div className='flex'>
                <Avatar className='w-6 h-6' alt="profile-image" src={data.imageSrc} />
                <div className='ml-2'>
                  <div className='flex'>
                    <div className='font-bold text-gray-300' key={idx}>
                      {data.id}
                    </div>
                    <div className='w-full flex justify-end items-center text-xs text-gray-500 font-light'>
                      {moment(data.date).format("LLL")}
                    </div>
                  </div>
                  <div>
                    {data.content}
                  </div>
                </div>
              </div>
            </div>
          })}
          {/* <div className='border-t-[.5px] text-gray-800' /> */}
          <div className='flex mt-3'> 
            <textarea
              className='w-full h-10 border border-gray-300 rounded-full resize-none py-1 px-3  bg-black'
              id="text"
              name="text"
              cols={33}
            >
            </textarea>
            <div className='w-10 h-10 ml-3 bg-gray-200 rounded-full flex justify-center items-center text-black text-sm'>+</div>
          </div>
        </div>
        : <SideComp />
      }
    </div >
  );
}
