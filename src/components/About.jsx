import React from 'react'
import '../css/About.css'
import Skill from './Skill'


export const About = () => {
  const programmingLanguages = ['Python', 'Java', 'C', 'SQL', 'JavaScript'];
  const backendSkills = ['Node.js','Express.js','MongoDB','REST APIs','MySQL','FastAPI', 'Pytorch', 'GCP','Firebase'];
  const frontendSkills = ['React','HTML','CSS','JSX','React Native','WebGL'];
  const devTools = ['Git', 'GitLab', 'Agile Development (Scrum)'];
  return (
    <div>
      <div className='about-header'>
        <h1>Learn a little about me...</h1>
      </div>
      <div className='skills'>
        <h1>&lt;</h1>
        <Skill title='Languages:' skillsList={programmingLanguages}/>
        <Skill title='Backend Skills:' skillsList={backendSkills} />
        <Skill title='Frontend Skills:' skillsList={frontendSkills} />
        <Skill title='Dev Tools:' skillsList={devTools} />
        
        <h1> /&gt;</h1>
      </div>

    </div>
  )
}
