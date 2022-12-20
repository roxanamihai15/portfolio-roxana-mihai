import React from 'react'

import './Navbar.css'


function Navbar() {


  return (

    <nav className='flex justify-between text-md 2xl:text-xl py-5 px-10 max-w-screen-xl mx-auto custom-color' id='home'>
        <a href='#home' className='logo'>Roxana Mihai</a>
        <ul className='flex items-center gap-6 font-normal'>
            <li className=''><a href="#about">About</a></li>
            <li><a href="#competenze">Skills</a></li>
            <li><a href="#progetti">Progetti</a></li>
        </ul>
    </nav>

  )
}

export default Navbar