import React from 'react'
import '../css/ProjectCard.css'
import PropTypes from 'prop-types'

function ProjectCard(props) {
  return (
    <div className='project-card'>
        <div className='card-body'>
            <img src={props.img} alt="" />
            <h2 className='card-title'>{props.title}</h2>
            <p className='card-description'>{props.desc}</p>
            <a href={props.link} target='_blank'>View project here!</a>
        </div>
    </div>
  )
}

ProjectCard.propTypes = {}

export default ProjectCard