import React from 'react';
import "./Feed.css";
import MessageSender from './MessageSender';

const Feed = () => {
  return (
    <div className='feed'>
        <MessageSender />
    </div>
  )
}

export default Feed