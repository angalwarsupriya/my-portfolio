import './index.css'
import MobileNav from '../MobileNav'
import React from 'react'
import { useState } from 'react'
function Navbar() {

    const [menuStatus, changeMenuStatus] = useState(false)
    const changeMenuStatusFun  =()=>{
        changeMenuStatus((preve)=> !preve)
    }

  return (
    <div className='nav-wrapper'>
       <div className='nav-container'>
           <h4 className='logo'>Portfolio</h4>
            <ul className='ul-con'>
                <li className='li'>
                    <a href='#hero-section' className='menu-item'>Home</a>
                </li>
                <li className='li'>
                    <a href='#skills-section' className='menu-item'>Skills</a>
                </li>
                <li className='li'>
                    <a href='#my-projects' className='menu-item'>Projects</a>
                </li>
                <li className='li'>
                    <a href='#contact-section' className='menu-item'>Contact Me</a>
                </li>
            </ul>
            <button className='contact-btn'>Hire Me</button>
             
             {menuStatus ?  <button className='nav-menu-btn' onClick={changeMenuStatusFun}>
                wrong
            </button> :
            <button className='nav-menu-btn' onClick={changeMenuStatusFun}>
                menu
            </button>}
            <MobileNav menuStatus={menuStatus}/>
       </div>
    </div>
  )
}

export default Navbar
/*
 <div className='nav-container'>
            <img src='https://res.cloudinary.com/dfb0groak/image/upload/v1721466423/music_9261274_ryma4r.png' alt='wesite-logo' className='logo'/>
            <ul>
                <li>
                    <a className='menu-item'>Home</a>
                </li>
                <li>
                    <a className='menu-item'>Skills</a>
                </li>
                <li>
                    <a className='menu-item'>Projects</a>
                </li>
                <li>
                    <a className='menu-item'>Contact Me</a>
                </li>
            </ul>
            <button className='contact-btn'>Hire Me</button>
             
             {menuStatus ?  <button className='nav-menu-btn' onClick={changeMenuStatusFun}>
                wrong
            </button> :
            <button className='nav-menu-btn' onClick={changeMenuStatusFun}>
                menu
            </button>}

            <MobileNav menuStatus={menuStatus}/>
        </div>
*/