import React from 'react';
import SideBarRow from './SideBarRow';
import "./SideBar.css";
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


function SideBar() {
    return (
        <div className="sidebar">
            <SideBarRow selected Icon = {HomeIcon} title = "Home"/>
            <SideBarRow Icon ={WhatshotIcon} title = "Trending" />
            <SideBarRow Icon = {SubscriptionsIcon}title = "Subscription" />
            <hr/>
            <SideBarRow  Icon = {LibraryAddIcon} title = "Library"/>
            <SideBarRow  Icon = {HistoryIcon} title = "History"/>
            <SideBarRow Icon = {OndemandVideoIcon} title = "Your videos"/>
            <SideBarRow Icon = {ThumbUpIcon} title = "Liked videos"/>
            <SideBarRow Icon = {ExpandMoreIcon} title = "Show more"/>
        </div>
    )
}

export default SideBar

