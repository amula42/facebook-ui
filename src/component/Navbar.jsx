import React from 'react'
import './Navbar.css';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import IconButton from '@mui/material/IconButton';
import AppsIcon from '@mui/icons-material/Apps';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
// import { useStateValue } from './StateProvider';
import { Avatar } from '@mui/material';

const Navbar = () => {
    // const [{user}] = useStateValue();
  return (
    <div className='header'>
        <div className='header_left'>
            <img src='https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/150px-Facebook_f_logo_%282021%29.svg.png' alt='' />
            <div className='header_input'>
                <SearchIcon />
                <input type='text' placeholder='Search Facebook' />
            </div>
        </div>
        <div className='header_center'>
            <div className='header_option header_option--active'>
                <HomeIcon fontSize='large' />
            </div>
            <div className='header_option'>
                <FlagIcon fontSize='large' />
            </div>
            <div className='header_option'>
                <OndemandVideoIcon fontSize='large' />
            </div>
            <div className='header_option'>
                <StorefrontIcon fontSize='large' />
            </div>
            <div className='header_option'>
                <SupervisedUserCircleIcon fontSize='large' />
            </div>
        </div>
        <div className='header_right'>
            <div className='header_info'>
                {/* <Avatar src={user.photoURL} />
                <h4>{user.displayName} </h4> */}
                <Avatar src="https://static.toiimg.com/photo/49892276.cms" />
                <h4>Hello, User </h4>
            </div>

            <IconButton>
                <AppsIcon />
            </IconButton>
            <IconButton>
                <ChatIcon />
            </IconButton>
            <IconButton>
                <NotificationsIcon />
            </IconButton>
            <IconButton>
                <ArrowDropDownCircleIcon />
            </IconButton>
        </div>
    </div>
  )
}

export default Navbar