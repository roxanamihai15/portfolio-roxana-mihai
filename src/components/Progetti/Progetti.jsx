import React from 'react'
import Ecommerce from '../E-commerce/Ecommerce'
import Finto from '../Finto/Finto'
import Todo from './Todo'

function Progetti() {
  return (
    <section id="progetti" className='max-w-screen-xl mx-auto '>
        
        <h2  className='text-4xl pt-10 pb-16 text-center text-slate-700 font-extrabold'>Progetti</h2>

        <Todo />
        <Finto />
        <Ecommerce />
    </section>
  )
}

export default Progetti