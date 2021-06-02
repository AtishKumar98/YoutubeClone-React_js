import React, { useState }from 'react';
import "./Header.css";
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {Link} from "react-router-dom";
// es7 snippets downlaod extension vsc


function Header() {
    const[inputSearch, setInputSearch] = useState("");

    return (

        <div className="header">
            <div className="header_left">
                <MenuIcon className="header_menu" />
                <Link to="/">
                <img
                    className="header_logo"
                    src="https://www.transparentpng.com/thumb/youtube-logo/hd-youtube-logo-image-0.png" alt="" />
                    </Link>
            </div>


            <div className="header_input">
                <input onChange={e=>setInputSearch(e.target.value)} value={inputSearch} placeholder="Search" type="text" />
            <Link to={`/search/${inputSearch}`}>
            
            <SearchIcon className="header_input_button" />
            </Link>
            
            </div>
            <div className="header_icons">
                <VideoCallIcon className="header_icon" />
                <AppsIcon className="header_icon" />
                <NotificationsIcon className="header_icon" />
                <AccountCircleIcon className="header_icon" />
            </div>


        </div>
    )
}

export default Header