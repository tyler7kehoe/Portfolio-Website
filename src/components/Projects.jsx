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
        title='Portfolio Website'
        desc='This here website you are checking out! Developed using React.js.'
        link='https://github.com/tyler7kehoe/portfolio-website'
      />
      <ProjectCard
        img='https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmEwOWExZWU0YjM0MDcyNjdmNzE2OTU3OWRkNzViMzI4NjY0ZDgxYSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/sUhP1XxfPI9tTIFRhp/giphy.gif'
        title='WebGL pyramid with shaders and animation'
        desc='Computer Graphics (CS 559) at UW-Madison'
        link='https://github.com/tyler7kehoe/rainbow-pyramid'
      />
    </div>
  )
}
