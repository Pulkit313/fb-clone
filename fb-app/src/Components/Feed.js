import React, { useEffect, useState} from 'react'
import MessageSender from './MessageSender'
import StoryReel from './StoryReel'
import Post from './Post'
import './Feed.css'
import axios from '../axios'
import Pusher from 'pusher-js'
import db from '../firebase'
 

const pusher = new Pusher('3e98358e1a020d2f9792', {
    cluster: 'us3'
  });

const Feed = () => {
    const [profilePic, setProfilePic] = useState('')
    const [postsData, setPostsData] = useState([])

    const syncFeed = () => {
        axios.get('/retrieve/posts')
        .then((res) => {
            console.log(res.data)
            setPostsData(res.data)
        })
    }
    useEffect( () => {
        const channel = pusher.subscribe('posts');
    channel.bind('inserted', function (data) {
      syncFeed()
    }); 
    }, [])


    useEffect(() => {
      syncFeed()
    }, [])
    return (
        <div className='feed'>
            <StoryReel />
            <MessageSender /> 
            {/* <Post
            profilePic='https://avatars.githubusercontent.com/u/67703695?s=400&u=ff8c8cc6482924a511bf3c6f3ed39fb8948ad939&v=4' 
            message='I am Pulkit'
            timestamp='1601493943737'
            imgName='imgName'
            username='Pulkit'
            />
            <Post
            profilePic='https://media-exp1.licdn.com/dms/image/C4D03AQG5MpSn5YvktA/profile-displayphoto-shrink_200_200/0/1603556017718?e=1627516800&v=beta&t=4pnU5sbUtuXyf5g5uzBzuNhpbv2kTvQb_VCMV4KwGxw'
            message='Hii, Bro How Are You!!'
            timestamp='1601493943737'
            imgName='imgName'
            username='Sudhanshu' /> */}
            


            {
                postsData.map(entry => (
                    <Post
                       profilePic={entry.avatar}
                       message={entry.text}
                       timestamp={entry.timestamp}
                       imgName={entry.imgName}
                       username={entry.user}
                       />
                ))
            }
        </div>
    )
}

export default Feed
