import React from 'react'
import '../css/Home.css'
import headshot from '../assets/me.png'

export const Home = () => {
  return (
    <div className="home_mainBox">
        <div class="name-header">
          <h1>My name is <span>Tyler Kehoe</span>.</h1>
        </div>
        <div className='headshot-image'>
          <img src={headshot} alt='Tyler Kehoe Headshot' />
        </div>    
    </div>
  )
}
