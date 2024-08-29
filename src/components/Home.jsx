import React from 'react'
import '../css/Home.css'
import headshot from '../assets/me.png'

export const Home = () => {
  return (
    <div className="home_mainBox">
        <div class="name-header">
          <h1>My name is <span id='name'>Tyler Kehoe</span>.</h1>
          <h2>I am a Software Engineer at Northwestern Mutual. I graduated from the University of Wisconsin in 2023 with a B.S. in Computer Science.</h2>
        </div>
        <div className='headshot-image'>
          <img src={headshot} alt='Tyler Kehoe Headshot' />
        </div>    
    </div>
  )
}
