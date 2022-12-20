import React from 'react'

import { BsFillMoonStarsFill } from 'react-icons/bs'
import { AiFillLinkedin, AiFillGithub, AiFillHtml5 } from 'react-icons/ai'

import { FaCss3Alt, FaBootstrap, FaGitAlt, FaReact, FaWordpress } from 'react-icons/fa'
import { SiJavascript, SiJquery, SiTailwindcss, SiVisualstudio } from 'react-icons/si'


function Skills() {
  return (
    <section id="competenze" className=' max-w-screen-xl mx-auto pb-10'>

        <h2 className='text-4xl py-10 text-center font-extrabold text-slate-700'>Competenze</h2>

        <div className='flex flex-wrap py-10 px-5 gap-12 justify-evenly max-w-xl mx-auto text-center text-slate-500'>
          <div>
            <AiFillHtml5 className='text-4xl mx-auto skill-icon hover:text-red-500'/>
            <p className='pt-3'>HTML5</p>
          </div>
          <div>
            <FaCss3Alt className='text-4xl  mx-auto hover:text-orange-500'/>
            <p  className='pt-3'>CSS3</p>
          </div>
          <div>
            <SiJavascript className='text-4xl  mx-auto hover:text-yellow-400'/>
            <p  className='pt-3'>JavaScript<span className='block text-center'> ES6</span></p>
          </div>
          {/* <div>
            <SiJavascript className='text-4xl  mx-auto text-yellow-400'/>
            <p>JavaScript<span className='block text-center'> ES6</span></p>
          </div> */}
          <div>
            <FaReact className='text-4xl  mx-auto hover:text-blue-600'/>
            <p  className='pt-3'>React</p>
          </div>
          <div>
            <FaBootstrap className='text-4xl  mx-auto hover:text-violet-700'/>
            <p  className='pt-3'>Bootstrap</p>
          </div>
          <div>
            <SiTailwindcss className='text-4xl  mx-auto hover:text-green-700'/>
            <p  className='pt-3'>Tailwind</p>
          </div>
          <div>
            <FaGitAlt className='text-4xl  mx-auto hover:text-red-500'/>
            <p  className='pt-3'>Git</p>
          </div>
          <div>
            <AiFillGithub className='text-4xl  mx-auto hover:text-slate-800'/>
            <p  className='pt-3'>Github</p>
          </div>
          <div>
            <SiVisualstudio className='text-4xl  mx-auto hover:text-blue-700'/>
            <p  className='pt-3'>Visual Studio <span className='block text-center'>Code</span></p>
          </div>
          {/* <div>
            <SiVisualstudio className='text-4xl  mx-auto text-blue-700'/>
            <p>Visual Studio Code</p>
          </div> */}
          <div>
            <SiJquery className='text-4xl  mx-auto hover:text-blue-900'/>
            <p  className='pt-3'>JQuery</p>
          </div>
          <div>
            <FaWordpress className='text-4xl  mx-auto hover:text-cyan-700'/>
            <p  className='pt-3'>Wordpress</p>
          </div>
        </div>

    </section>
  )
}

export default Skills