import './index.css'

import React from 'react'

function MobileNav(props) { 
  const {menuStatus} = props
  const menuStaAct = menuStatus ? '' : 'active'
  return (
    <div className={`mobile-nav-con ${menuStaAct}`}>
        <ul className='ul-con-in-sm'>
                <li className='li-sm'>
                    <a href='#hero-section' className='menu-item-sm'>Home</a>
                </li>
                <li className='li-sm'>
                    <a href='#skills-section' className='menu-item-sm'>Skills</a>
                </li>
                <li className='li-sm'>
                    <a href='#my-projects' className='menu-item-sm'>Projects</a>
                </li>
                <li className='li-sm'>
                    <a href='#contact-section' className='menu-item-sm'>Contact Me</a>
                </li>
            </ul>
    </div>
  )
}

export default MobileNav