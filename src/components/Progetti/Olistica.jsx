import { useInView } from 'react-intersection-observer';


function Olistica() {

    const { ref: elementRef, inView: elementRefVisible} = useInView({triggerOnce: true});


  return (
    <div className='flex flex-col lg:flex-row justify-between items-center px-10 max-w-screen-xl py-6'>           
        <div ref={elementRef} className={`${'flex-1 p-5 order-1 lg:order-none hide-rigth'} ${elementRefVisible ? 'show-anim' : ''}`}>

            
            <div className='mb-3 text-slare-800 text-xs'>
                <span className='bg-cyan-500 inline-block mr-2 py-2 w-fit rounded-md px-4 badge'>Wordpress</span>
            </div>

            <h3 className='pb-4 text-xl font-bold'>Olistica Serendipity</h3>
            <div className=''>
                <p className=' py-2 mb-5 leading-8 project-description'>
                    Sviluppo web di un sito web per il cliente Olistica serendipity. Il sito è stato realizzato in Wordpress con il tema Divi.
                </p>
              
                <div className='mb-3 text-blue-800 text-sm text-center sm:text-left'>
                    <a href="https://www.olisticaserendip.it/" target='_blank' rel="noreferrer" className='btn hover:text-slate-50 cursor-pointer inline-block mr-5 py-2 px-4 border-2 text-indigo-500  border-indigo-400 rounded-md w-full sm:w-fit'>APRI IL SITO </a>
                </div>
            </div>
        </div>
        <div ref={elementRef}  className={`${'flex-1 px-5 wrap-img hide-rigth lg:flex lg:justify-end  delay-anim'} ${elementRefVisible ? 'show-anim' : ''}`}>
            <a href="https://www.olisticaserendip.it/" target='_blank' rel="noreferrer" title='Vai al sito'>

                <picture className='inline-block md:mr-0 rounded-lg'>
                    <source srcSet="./images/olistica-preview.webp" />
                    <img src="./images/olistica-preview.png" alt="Preview sito web Olistica Serendipity"  />
                </picture>              
            </a>
        </div>
    </div>
  )
}

export default Olistica