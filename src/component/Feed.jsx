import React, { useEffect, useState } from 'react';
import "./Feed.css";
import MessageSender from './MessageSender';
import Post from './Post';
import db from '../firebase';
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const colRef = collection(db, "posts");
    const q = query(colRef, orderBy('timestamp', 'desc'));
    const unsub = onSnapshot(q, (snapshot) => {
      setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data()})))
    });

    return unsub;
});
  

  return (
    <div className='feed'>
        <MessageSender />
        {posts.map((post) => (
          <Post 
            key = {post.id}
            profilePic = {post.data.profilePic}
            message = {post.data.message}
            timestamp = {post.data.timestamp}
            username = {post.data.username}
            image = {post.data.image}
          />
        ))}
    </div>
  )
}

export default Feed