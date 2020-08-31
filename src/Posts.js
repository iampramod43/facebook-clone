import React from 'react';
import './Posts.css'
import { Avatar } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NearMeIcon from '@material-ui/icons/NearMe';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
function Posts({profilePic, image, username, timestamp, message}) {
    return  <div className="posts">
            <div className="posts__top">
                <Avatar className="posts__avatar" src={profilePic} />
                <div className="posts__topInfo">
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>
            </div>
            <div className="posts__bottom">
                <p>{message}</p>

            </div>
            <div className="posts__image">
                <img src={image} alt=""></img>
            </div>
            <div className="posts__options">
                <div className="posts__option">
                    <ThumbUpIcon />
                    <p>Like</p>
                </div>
                <div className="posts__option">
                    <ChatBubbleOutlineIcon />
                    <p>Comment</p>
                </div>
                <div className="posts__option">
                    <NearMeIcon />
                    <p>Share</p>
                </div>
                <div className="posts__option">
                    <AccountCircleIcon />
                    <ExpandMoreIcon />
                </div>
            </div>
        </div>
}

export default Posts
