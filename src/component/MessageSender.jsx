import { Avatar } from '@mui/material'
import React, { useState } from 'react';
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import "./MessageSender.css";
import { useStateValue } from './StateProvider';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import db from '../firebase';

const MessageSender = () => {
    const [{user}] = useStateValue();
    const [input, setInput] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        addDoc(collection(db, 'posts'), {
            message: input,
            timestamp: serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl
        } )

        setInput("");
        setImageUrl("");
    };

  return (
    <div className='messageSender'>
        <div className='messageSender_top'>
            <Avatar src={user.photoURL} />
            <form>
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className='meassageSender_input'
                    placeholder={`What's on your mind, ${user.displayName}?`} />
                <input
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    placeholder="image URL (Optional)" />
                <button onClick={handleSubmit} type="submit">
                    hidden
                </button>
            </form>
        </div>
        <div className='messageSender_bottom'>
            <div className="messageSender_option">
                <VideocamIcon style={{color: "red"}} />
                <h3>Live Video</h3>
            </div>
            <div className="messageSender_option">
                <PhotoLibraryIcon style={{color: "green"}} />
                <h3>Photo/Video</h3>
            </div>
            <div className="messageSender_option">
                <InsertEmoticonIcon style={{color: "orange"}} />
                <h3>Feeling/Activity</h3>
            </div>
        </div>
    </div>
  )
}

export default MessageSender