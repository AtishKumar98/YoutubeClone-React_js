import Avatar from '@material-ui/core/Avatar';
import React from 'react'
import './Videocard.css'

function VideoCard({image, title, channel, timestamp, channelImage, views}) {
    return (
        <div className="videoCard">
            <img className="videocard_thumbnail" src= {image}alt = ''/>
            <div className="videoCard_info">
            <Avatar 
            className="videoCard_avatar" 
            alt={channel}
            src={channelImage} 
            />
            <div className="video_text">
            <h4>{title}</h4>
            <p>{channel}</p>
            <p>{views} . {timestamp}</p>
            </div>
        </div>
        </div>
    )
}

export default VideoCard
