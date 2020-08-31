import React, { useState, useEffect } from 'react';
import './Feed.css'
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Posts from './Posts';
import db from './firebase';
function Feed() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        ));
    }, []);
    return <div className="feed">
            <StoryReel />
            <MessageSender />
            {posts.map(post => (
                <Posts
                key={post.id}
                profilePic={post.data.profilePic}
                message={post.data.message}
                timestamp={post.data.timestamp}
                username={post.data.userName}
                image={post.data.image}
                >

                </Posts>
            ))}
        </div>
    
}

export default Feed
