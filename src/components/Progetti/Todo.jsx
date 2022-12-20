import React from 'react'
import { AiFillGithub } from 'react-icons/ai'



function Todo() {
  return (
    // <div className='flex flex-col md:flex-row justify-between items-center px-10 max-w-screen-xl'>
    <div className='flex flex-col md:flex-row justify-between items-center px-10 max-w-screen-xl pb-10'>
        
        <div className='flex-1 p-5  wrap-img'>
            <img src="./images/progetto-1.png" alt="" className='rounded-xl' />
        </div>

        <div className='flex-1 p-5'>
            <div className='mb-3 text-slare-800 text-xs'>
                <span className='bg-orange-200 inline-block mr-2 py-2 w-fit rounded-md px-4'>HTML & CSS</span>
                <span className='bg-yellow-200 inline-block mr-2 py-2 w-fit rounded-md px-4'>JavaScript</span>
                <span className='bg-blue-200 inline-block mr-2 py-2 w-fit rounded-md px-4'>React</span>
            </div>

            <h3 className='pb-4 text-xl font-bold'>Todo List App</h3>
            <div className=''>
                <p className=' py-2 mb-5 leading-8 project-description'>Ho sviluppato una todo list per tenere traccia dei propri impegni.
                    I progetti si possono aggiungere, modificare e cancellare.
                    Sono anche inseriti tra i cookie così in caso di refresh della pagina web rimangono
                </p>
                
                <div className='mb-3 text-blue-800  text-sm'>
                    <a href="#" className='btn hover:text-slate-50 cursor-pointer inline-block mr-5 py-2 px-4 border-2 text-indigo-500  border-indigo-400 w-fit rounded-md '>APRI IL SITO </a>
                    <a href="#" className='btn hover:text-slate-50 cursor-pointer inline-block py-2 px-4 border-2  w-fit rounded-md text-indigo-500  border-indigo-400'> &lt;/&gt;  GUARDA IL CODICE</a>
                </div>
            </div>


        </div>



        

    </div>
  )
}

export default Todo