import { useInView } from 'react-intersection-observer';


function Finto() {

    const { ref: elementRef, inView: elementRefVisible} = useInView();


  return (


    <div className='flex flex-col lg:flex-row justify-between items-center px-10 max-w-screen-xl py-6'>
            


        {/* <div className='flex-1 p-5 order-1 lg:order-none'> */}
        <div ref={elementRef} className={`${'flex-1 p-5 order-1 lg:order-none hide-rigth'} ${elementRefVisible ? 'show-anim' : ''}`}>

            
            <div className='mb-3 text-slare-800 text-xs'>
                <span className='bg-cyan-500 inline-block mr-2 py-2 w-fit rounded-md px-4'>Wordpress</span>
            </div>

            <h3 className='pb-4 text-xl font-bold'>Progetto finto</h3>
            <div className=''>
                <p className=' py-2 mb-5 leading-8 project-description'>Ho sviluppato una todo list per tenere traccia dei propri impegni.
                    I progetti si possono aggiungere, modificare e cancellare.
                    Sono anche inseriti tra i cookie così in caso di refresh della pagina web rimangono
                </p>
                
                <div className='mb-3 text-blue-800 text-sm text-center sm:text-left'>
                    <a href="https://www.olisticaserendip.it/" target='blank' className='btn hover:text-slate-50 cursor-pointer inline-block mr-5 py-2 px-4 border-2 text-indigo-500  border-indigo-400 rounded-md w-full sm:w-fit'>APRI IL SITO </a>
                    <a href="#" target='blank' className='btn hover:text-slate-50 cursor-pointer inline-block mr-5 py-2 px-4 border-2 text-indigo-500  border-indigo-400 rounded-md w-full sm:w-fit'> &lt;/&gt;  GUARDA IL CODICE </a>
                </div>
            </div>


        </div>

        {/* <div className='flex-1 p-5 wrap-img'> */}

        <div ref={elementRef}  className={`${'flex-1 p-5 wrap-img hide-rigth  delay-anim'} ${elementRefVisible ? 'show-anim' : ''}`}>
            <img src="./images/olistica-serendipity.png" alt="" className='rounded-xl' />
            {/* <img src="./images/web3.png" alt="" className='rounded-xl' /> */}
        </div>




    </div>
  )
}

export default Finto