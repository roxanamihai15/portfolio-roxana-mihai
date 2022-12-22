import React, { useEffect } from 'react'
import { AiFillGithub } from 'react-icons/ai'



function Todo() {

    useEffect(() => {

        const elementiProva = document.querySelectorAll('.hide-left')

        const callbackProva = function (items) {
            items.forEach(item => {
                item.target.classList.add('show-anim', item.isIntersecting)
            });
            console.log(items);
        
        }
        
        const observer = new IntersectionObserver(callbackProva, { threshold: 0.5 })
        
        elementiProva.forEach((element) => {
            observer.observe(element)
        })
        
        
    })


  return (
    <div className='flex flex-col lg:flex-row justify-between items-center px-10 max-w-screen-xl py-6'>
        
        <div className='flex-1 p-5 wrap-img hide-left delay-anim'>
            <img src="./images/progetto-1.png" alt="" className='rounded-xl' />
        </div>

        <div className='flex-1 p-5 hide-left '>
            <div className='mb-3 text-slare-800 text-xs'>
                <span className='bg-orange-200 inline-block mr-2 py-2 w-fit rounded-md px-4'>HTML & CSS</span>
                <span className='bg-yellow-200 inline-block mr-2 py-2 w-fit rounded-md px-4'>JavaScript</span>
            </div>

            <h3 className='pb-4 text-xl font-bold'>Todo List App</h3>
            <div className=''>
                <p className=' py-2 mb-5 leading-8 project-description'>Ho sviluppato una todo list per tenere traccia dei propri impegni.
                    I progetti si possono aggiungere, modificare e cancellare.
                    Sono anche inseriti tra i cookie così in caso di refresh della pagina web rimangono
                </p>
                
                <div className='mb-3 text-blue-800 text-sm text-center sm:text-left'>
                    <a href="#" className='btn hover:text-slate-50 cursor-pointer inline-block mr-5 py-2 px-4 border-2 text-indigo-500  border-indigo-400 rounded-md w-full sm:w-fit'>APRI IL SITO </a>
                    <a href="#" className='btn hover:text-slate-50 cursor-pointer inline-block mr-5 py-2 px-4 border-2 text-indigo-500  border-indigo-400 rounded-md w-full sm:w-fit'> &lt;/&gt;  GUARDA IL CODICE </a>
                </div>
            </div>


        </div>



        

    </div>
  )
}

export default Todo