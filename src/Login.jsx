import { Button } from '@mui/material';
import React from 'react';
import "./Login.css";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from './firebase';
import { actionTypes } from "./component/reducer";
import { useStateValue } from "./component/StateProvider";

const Login = () => {
    const [state, dispatch] = useStateValue();
    const signIn = () => {
        
        signInWithPopup(auth, provider)
        .then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
            console.log(result.user);
        })
        .catch((error) => alert(error.message));
    
    }
  return (
    <div className='login'>
        <div className="login_logo">
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/150px-Facebook_f_logo_%282021%29.svg.png" alt="" />
            <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" alt="" />
            <Button type='submit' onClick={signIn}>
                Sign In
            </Button>
        </div>
    </div>
  )
}

export default Login