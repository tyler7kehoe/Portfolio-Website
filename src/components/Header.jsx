import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/Header.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Header() {
  return (
    <div className='header'>
        {/* Left side logo link */}
        <div className='header_left'>
            <NavLink to='/' className='header_name'>TK</NavLink>
        </div>
        {/* Links on the right side */}
        <div className='header_links'>
            <NavLink to='/about' className='header_aboutLink'>About</NavLink>

            <NavLink to='/projects' className='header_projectsLink'>Projects</NavLink>

            <NavLink to='/contact' className='header_contactLink'>Contact</NavLink>
            
            <a href='https://github.com/tyler7kehoe' target='_blank'>
              <GitHubIcon className='header_gitHubIcon'/>
            </a>
            <a href='https://linkedin.com/in/tyler-kehoe' target='_blank'>
              <LinkedInIcon className='header_linkedInIcon'/>
            </a>
        </div>
        {/*Left off on tutorial 6: https://www.youtube.com/watch?v=uKRo1Re_B8c  */}

    </div>
  )
}

export default Header