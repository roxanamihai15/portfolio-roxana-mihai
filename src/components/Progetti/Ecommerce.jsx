import React from 'react'
import { useInView } from 'react-intersection-observer';


function Ecommerce() {

    const { ref: elementRef, inView: elementRefVisible} = useInView({triggerOnce: true});

  return (
    

    <div className='flex flex-col lg:flex-row justify-between items-center px-10 max-w-screen-xl py-6'>
            

        <div ref={elementRef}  className={`${'flex-1 p-5 wrap-img hide-left delay-anim'} ${elementRefVisible ? 'show-anim' : ''}`}>
            <a href="https://shoponlineroxana.netlify.app/" target='_blank' title='Vai al sito'><img src="./images/shop-preview.png" alt="Preview progetto e-commerce"/></a>
        </div>

        <div ref={elementRef} className={`${'flex-1 p-5 hide-left'} ${elementRefVisible ? 'show-anim' : ''}`}>
            <div className='mb-3 text-slare-800 text-xs'>
                <span className='bg-blue-200 inline-block mr-2 py-2 w-fit rounded-md px-4'>React</span>
                <span className='bg-purple-400 inline-block mr-2 py-2 w-fit rounded-md px-4'>Bootstrap</span>
            </div>

            <h3 className='pb-4 text-xl font-bold'>Finto e-commerce</h3>
            <div className=''>
                <p className=' py-2 mb-5 leading-8 project-description'>Ho sviluppato una todo list per tenere traccia dei propri impegni.
                    I progetti si possono aggiungere, modificare e cancellare.
                    Sono anche inseriti tra i cookie così in caso di refresh della pagina web rimangono.
                </p>
                
                <div className='mb-3 text-blue-800 text-sm text-center sm:text-left'>
                    <a href="https://shoponlineroxana.netlify.app/" target='_blank' className='btn hover:text-slate-50 cursor-pointer inline-block mr-5 py-2 px-4 border-2 text-indigo-500  border-indigo-400 rounded-md w-full sm:w-fit'>APRI IL SITO </a>
                    <a href="https://github.com/roxanamihai15/shop-online" target='_blank' className='btn hover:text-slate-50 cursor-pointer inline-block mr-5 py-2 px-4 border-2 text-indigo-500  border-indigo-400 rounded-md w-full sm:w-fit'> &lt;/&gt;  GUARDA IL CODICE </a>
                </div>
            </div>


        </div>

  




    </div>
    )
}

export default Ecommerce