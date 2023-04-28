import React from 'react'
import '../css/Skill.css'
import PropTypes from 'prop-types'

function Skill(props) {
    const listItems = props.skillsList.map((skill) =>
        <li key={skill.toString()}>
            {skill}
        </li>
    );
  return (
    <div className='skill-list'>
        <div className='card-body-skill'>
            <h2 className='skill-title'>{props.title}</h2>
            <ul className='skill-list'>
                {listItems}
            </ul>
        </div>
    </div>
  )
}

Skill.propTypes = {}

export default Skill