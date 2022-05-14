import React from 'react';
import "./Feed.css";
import MessageSender from './MessageSender';
import Post from './Post';

const Feed = () => {
  return (
    <div className='feed'>
        <MessageSender />
        <Post />
    </div>
  )
}

export default Feed