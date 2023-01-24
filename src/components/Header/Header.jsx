import { useInView } from 'react-intersection-observer';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'


function Header() {

    const { ref: elementRef, inView: elementRefVisible} = useInView({triggerOnce: true});

  return (
    <>
    <header id="about" className='flex flex-col items-center px-10 py-20 max-w-screen-xl mx-auto md:flex-row justify-between md:pt-18 lg:gap-44 md:py-24'>
    {/* <header id="about" className='pattern-bg flex flex-col items-center px-10 py-20 max-w-screen-lg text-center mx-auto md:flex-row justify-between lg:gap-44 md:py-42'> */}

        <div ref={elementRef}  className={`${'flex flex-col gap-3 hide  max-w-4xl'} ${elementRefVisible ? 'show-anim' : ''}`}>

            {/* <div className='flex gap-2 items-center text-center justify-self-center mx-auto'> */}
            <div className='flex gap-2 items-center'>

                <img src="./images/hand.png" alt="" className='max-h-7' />
                <h3 className='text-lg lg:text-xl '>
                    Ciao! Sono<span className='text-indigo-400 font-bold'> Roxana </span>
                </h3>
            </div>
            <h1 className='text-5xl font-extrabold text-indigo-400 text-stroked py-2'>
                Junior Frontend Developer
            </h1>

            <p className='text-xl leading-9 py-3'>
            Sono una web developer front end. Mi piace scrivere codice per dare vita a esperienze digitali. Sono sempre alla ricerca di nuove cose da scoprire e imparare per trasformare idee creative in vere web experiences.
            </p>

            <div className='flex flex-col gap-3 text-center pb-5 mx-auto w-full sm:flex-row sm:gap-8 md:mx-0' >
                    <a href='https://www.linkedin.com/in/roxana-mihai-97b7a7175/' target='_blank' className='text-sm cursor-pointer text-slate-50 py-2 p-2 pr-3 border-2 border-indigo-400 rounded-md bg-indigo-400 move-button hover:text-white'>   <AiFillLinkedin className='text-4xl inline' /> Profilo Linkedin    </a>
                    <a href='https://github.com/roxanamihai15' target='_blank' className='btn text-sm hover:text-slate-50 cursor-pointer text-indigo-500 bg-slate-50 py-2 p-2 pr-3 border-2 border-indigo-400 rounded-md md:mt-0'>   <AiFillGithub className='text-4xl inline' /> Profilo Github    </a>
            </div>
        </div>
    </header>


    </>
  )
}

export default Header