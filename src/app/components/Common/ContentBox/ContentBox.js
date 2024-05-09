'use client'
import React, { useState, useEffect } from 'react';
import { Avatar } from "@mui/material";
import {
  Favorite,
  FavoriteBorderOutlined,
  ChatBubbleOutlineOutlined,
  ChatBubbleOutlined
} from '@mui/icons-material';
import moment from 'moment';
import 'moment/locale/ko';

moment().locale('ko');

function ContentBox({
  data,
  selectedCommentId,
  setSelectedCommentId
}) {
  const [isGood, setIsGood] = useState(false);
  const [isComment, setIsComment] = useState(false);
  const commentCount = data.comment.length;

  useEffect(() => {
    selectedCommentId === data.id ? setIsComment(true) : setIsComment(false)
  }, [selectedCommentId]);

  return (
    <div className='w-full max-w-xl min-w-96 border-[.5px] rounded-lg border-gray-300 p-5 my-3'>
      <div className='flex mb-2.5'>
        <Avatar alt="profile-image" src={data.imageSrc} />
        <div className='flex justify-start items-center ml-2 font-bold'>
          {data.id}
        </div>
      </div>
      <div className='mb-2.5'>
        {data.content}
      </div>
      <div className='flex items-center'>
        <div className='flex justify-start items-center'>
          <div
            onClick={() => {
              setIsGood(prev => (!prev))
            }}
          >
            {isGood ? <Favorite /> : <FavoriteBorderOutlined />}
          </div>
          <div className='font-bold text-sm ml-1'>
            {data.good}
          </div>
          <div className='ml-2'
            onClick={() => {
              if (selectedCommentId === data.id) {
                setSelectedCommentId("")
              } else {
                setSelectedCommentId(data.id);
              }
            }}
          >
            {isComment ? <ChatBubbleOutlined /> : <ChatBubbleOutlineOutlined />}
          </div>
          <div className='font-bold text-sm ml-1'>
            {commentCount}
          </div>
        </div>
        <div className='flex grow justify-end font-light text-xs text-slate-400'>
          {moment(data.date).format("LLL")}
        </div>
      </div>
    </div>
  );
}

export default ContentBox;