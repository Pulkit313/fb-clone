import React from 'react'
import Story from './Story'
import './StoryReel.css'

const StoryReel = () => {
    return (
        <div className='storyReel'>
            <Story
            image='https://avatars.githubusercontent.com/u/67703695?s=400&u=ff8c8cc6482924a511bf3c6f3ed39fb8948ad939&v=4' 
            profileSrc='https://avatars.githubusercontent.com/u/67703695?s=400&u=ff8c8cc6482924a511bf3c6f3ed39fb8948ad939&v=4'
            title='Pulkit Grover'/> 
            <Story
            image='https://media-exp1.licdn.com/dms/image/C4E03AQElGK-0RLxA7Q/profile-displayphoto-shrink_200_200/0/1611126526472?e=1627516800&v=beta&t=MmS4BODY1OrTuCf3vUz6kZVN1wOiWCqNweCvU-NL2UI'
            profileSrc='https://www.linkedin.com/in/drishti-gupta-178bba176/'
            title='Drishti Gupta' />
            <Story
            image='https://media-exp1.licdn.com/dms/image/C4D03AQG5MpSn5YvktA/profile-displayphoto-shrink_200_200/0/1603556017718?e=1627516800&v=beta&t=4pnU5sbUtuXyf5g5uzBzuNhpbv2kTvQb_VCMV4KwGxw'
            profileSrc='https://www.linkedin.com/in/sudhanshu-kashyap-a78b611b5/'
            title='Sudhanshu Kashyap' />
        </div>
    )
}

export default StoryReel
 