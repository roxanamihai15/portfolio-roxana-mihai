import Ecommerce from './Ecommerce'
import Finto from './Finto'
import Todo from './Todo'



function Progetti() {
  return (
    <section id="progetti" className='max-w-screen-xl mx-auto py-12'>
        
        <h2  className='text-4xl pb-12 text-center text-slate-700 font-extrabold'>Progetti</h2>

        <Todo />
        <Finto />
        <Ecommerce />
    </section>
  )
}

export default Progetti