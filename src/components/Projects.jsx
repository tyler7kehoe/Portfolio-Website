import React from 'react'
import '../css/Projects.css'
import ProjectCard from './ProjectCard'

export const Projects = () => {
  return (
    <div className='projects-list'>
      <ProjectCard 
        img='https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png'
        title='Argus Discord Bot'
        desc='Argus is a project I completed during my Junior year of college. I worked for a friend that was a moderator in the Tasty Bones Discord Server. Devloped used Python and Discord.py.'
        link='https://github.com/tyler7kehoe/Argus'
      />
      <ProjectCard
        img=''
        title='Portfolio Website'
        desc='This here website you are checking out! Developed using React.js.'
        link='https://tylerkehoe.com'
      />
    </div>
  )
}
