import Ecommerce from './Ecommerce'
import Olistica from './Olistica'
import Todo from './Todo'



function Progetti() {
  return (
    <section id="progetti" className='max-w-screen-xl mx-auto py-12'>
        <h2  className='text-4xl pb-12 text-center text-slate-700 font-extrabold'>Progetti</h2>
        <Todo />
        <Olistica />
        <Ecommerce />
    </section>
  )
}

export default Progetti