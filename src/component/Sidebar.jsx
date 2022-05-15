import React from 'react'
import "./Sidebar.css";
import SidebarRow from './SidebarRow';
import PeopleIcon from '@mui/icons-material/People';
import GroupsIcon from '@mui/icons-material/Groups';
import StoreIcon from '@mui/icons-material/Store';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FlagIcon from '@mui/icons-material/Flag';
import { useStateValue } from './StateProvider';

const Sidebar = () => {
  const [{user}] = useStateValue();
  return (
    <div className='sidebar'>
        <SidebarRow src={user.photoURL} title={user.displayName} />
        <SidebarRow Icon={PeopleIcon} title="Friends" />
        <SidebarRow Icon={GroupsIcon} title="Groups" />
        <SidebarRow Icon={StoreIcon} title="Marketplace" />
        <SidebarRow Icon={OndemandVideoIcon} title="Watch" />
        <SidebarRow Icon={AccessTimeIcon} title="Memories" />
        <SidebarRow Icon={FlagIcon} title="Pages" />
    </div>
  )
}

export default Sidebar