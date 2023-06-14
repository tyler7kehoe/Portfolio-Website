import React from 'react'
import '../css/Projects.css'
import ProjectCard from './ProjectCard'

export const Projects = () => {
  return (
    <div className='projects-list'>
      <h1>Check out my projects!</h1>
      <ProjectCard 
        img='https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png'
        title='Argus Discord Bot'
        desc='Argus is a project I completed during my Junior year of college. I worked for a friend that was a moderator in the Tasty Bones Discord Server. Devloped used Python, Discord API and Discord.py.'
        link='https://github.com/tyler7kehoe/Argus'
      />
      <ProjectCard
        img=''
        title='LetsGetPhysical - Workout Partner Finder'
        desc='Software Engineering course group project during my senior year of college. I worked on the backend developing an API and maintaining our NoSQL MongoDB database. Developed using FastAPI paired with MongoDB, with React.js on the frontend.'
        link='https://github.com/tyler7kehoe/workout-partner-finder'
      />
      <ProjectCard
        img='https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmEwOWExZWU0YjM0MDcyNjdmNzE2OTU3OWRkNzViMzI4NjY0ZDgxYSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/sUhP1XxfPI9tTIFRhp/giphy.gif'
        title='WebGL pyramid with shaders and animation'
        desc='Computer Graphics (CS 559) project at UW-Madison'
        link='https://github.com/tyler7kehoe/rainbow-pyramid'
      />
      <ProjectCard
        img=''
        title='UDP Protocol Network Emulator'
        desc='Computer Networks class project. Packets are requested and sent through a network emulator to emulate packet forwarding. Works with multiple instances of requesters and senders on different ports.'
        link='https://github.com/tyler7kehoe/network-emulator/'
      />
      <ProjectCard
        img='https://github.com/zalandoresearch/fashion-mnist/raw/master/doc/img/embedding.gif'
        title='Pytorch Clothing Predictor Trained By Nueral Network'
        desc='Artificial Intelligence class project. Creates and trains a neural network that labels images of clothing. Trained on the FashionMNIST dataset from Pytorch.'
        link='https://github.com/tyler7kehoe/clothing-labeler'
      />
      <ProjectCard
        img=''
        title='Portfolio Website'
        desc='This here website you are checking out! Developed using React.js.'
        link='https://github.com/tyler7kehoe/portfolio-website'
      />  
    </div>
  )
}
