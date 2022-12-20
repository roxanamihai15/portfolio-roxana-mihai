import React from 'react'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'




function Header() {

  




  return (
    <>
    {/* <div className='h-screen'></div> */}
    <header id="about" className='flex flex-col items-center px-10 py-24 max-w-screen-xl mx-auto md:flex-row justify-between md:pt-18 lg:gap-44'>

        <div className='flex flex-col gap-3 anim'>
            <div className='flex gap-2 items-center'>
                <img src="./images/mano-saluta.png" alt="" className='max-h-6' />
                <h3 className='text-xl lg:text-xl '>
                    Ciao! Sono<span className='text-indigo-400 font-bold'> Roxana </span>
                </h3>
            </div>
            <h1 className='text-4xl pt-2 font-extrabold text-stroked'>
                Junior Frontend Developer
            </h1>
            <p className='text-md leading-9 py-3'>
            Sono una Junior Front-end Developer appassionata di <span className='highlight yellow'>sviluppo web</span> alla ricerca di una prima esperienza lavorativa nel settore, 
            con buone conoscenze di base e tanta voglia di metterle in pratica per <span className='highlight blue'>continuare a migliorare</span>.
            </p>

            <div className='md:flex flex-col  md:flex-row md:gap-8 pb-5 mx-auto md:mx-0 w-full' >

                    <a className='text-sm cursor-pointer text-slate-50 py-2 p-2 pr-3 border-2 border-indigo-400 rounded-md bg-indigo-400'>   <AiFillLinkedin className='text-4xl inline' /> Profilo Linkedin    </a>
                    {/* <a className='btn text-sm hover:text-slate-50 cursor-pointer text-indigo-400 py-2 p-2 pr-3 border-2 border-indigo-400 rounded-md'>   <AiFillLinkedin className='text-4xl inline' /> Profilo Linkedin    </a> */}

                    <a className='btn text-sm hover:text-slate-50 cursor-pointer text-indigo-400 py-2 p-2 pr-3 border-2 border-indigo-400 rounded-md md:mt-0'>   <AiFillGithub className='text-4xl inline' /> Profilo Github    </a>

                    {/* <button className='text-sm block w-full md:w-fit py-2 bg-indigo-400 border-2 border-indigo-400 p-1 pr-3 text-gray-100 rounded-md'>   <AiFillLinkedin className='text-4xl inline' /> Profilo Linkedin    </button>
                    <button className='text-sm block w-full md:w-fit mt-2 md:mt-0 border-2 py-2 p-1 pr-3 text-indigo-500  border-indigo-400  rounded-md'>   <AiFillGithub className='text-4xl inline' /> Profilo Github    </button> */}

                
            </div>
        </div>
        
        {/* alt della foto? */}
        <div className='flex justify-end items-center container-wrapper anim ' data-delay='1s'>
            <div className="wrapper">
                {/* <img src='./images/foto.png' alt='Foto Roxana Mihai' className='max-w-xs rounded-xl'/> */}
            </div>
        </div>
    </header>
    </>
  )
}

export default Header