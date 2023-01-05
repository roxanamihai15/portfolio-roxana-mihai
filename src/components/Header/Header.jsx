import { useInView } from 'react-intersection-observer';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'


function Header() {

    const { ref: elementRef, inView: elementRefVisible} = useInView({triggerOnce: true});

  return (
    <>
    <header id="about" className='flex flex-col items-center px-10 py-20 max-w-screen-xl mx-auto md:flex-row justify-between md:pt-18 lg:gap-44 md:py-32'>

        {/* <div className='flex flex-col gap-3 hide-rigth'> */}
        <div ref={elementRef}  className={`${'flex flex-col gap-3 hide'} ${elementRefVisible ? 'show-anim' : ''}`}>

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

            <div className='flex flex-col gap-3 text-center pb-5 mx-auto w-full sm:flex-row sm:gap-8 md:mx-0' >
                    <a className='text-sm cursor-pointer text-slate-50 py-2 p-2 pr-3 border-2 border-indigo-400 rounded-md bg-indigo-400 move-button hover:text-white'>   <AiFillLinkedin className='text-4xl inline' /> Profilo Linkedin    </a>
                    <a href='https://github.com/roxanamihai15' target='_blank' className='btn text-sm hover:text-slate-50 cursor-pointer text-indigo-400 py-2 p-2 pr-3 border-2 border-indigo-400 rounded-md md:mt-0'>   <AiFillGithub className='text-4xl inline' /> Profilo Github    </a>
            </div>
        </div>

    </header>
    </>
  )
}

export default Header