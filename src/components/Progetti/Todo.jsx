import { useInView } from 'react-intersection-observer';

function Todo() {

    const { ref: elementRef, inView: elementRefVisible} = useInView({triggerOnce: true});

  return (
    <div className='flex flex-col lg:flex-row justify-between items-center px-10 max-w-screen-xl py-6'>        
        <div ref={elementRef}  className={`${'flex-1 p-5 wrap-img hide-left delay-anim'} ${elementRefVisible ? 'show-anim' : ''}`}>
            <a href="https://dailytodoroxana.netlify.app/" target='_blank' rel="noreferrer" title='Vai al sito'>
                <picture className="inline-block lg:mr-auto  rounded-lg">
                    <source srcSet="./images/todo-preview2.webp" />
                    <img src="./images/todo-preview2.png" alt="Preview progetto to do list"  />
                </picture>
            </a>
        </div>
        <div ref={elementRef} className={`${'flex-1 p-5 hide-left'} ${elementRefVisible ? 'show-anim' : ''}`}>
            <div className='mb-3 text-slare-800 text-xs'>
                <span className='bg-blue-200 inline-block mr-2 py-2 w-fit rounded-md px-4 badge'>React</span>
                <span className='bg-orange-200 inline-block mr-2 py-2 w-fit rounded-md px-4 badge'>Firebase</span>
                <span className='bg-sky-200 inline-block mr-2 py-2 w-fit rounded-md px-4 badge'>Material UI</span>

            </div>
            <h3 className='pb-4 text-xl font-bold'>To Do List</h3>
            <div className=''>
                <p className=' py-2 mb-5 leading-8 project-description'>
                    Ho sviluppato una To Do List per tenere traccia dei miei impegni giornalieri. 
                    Per l'interfaccia utente, ho utilizzato React e Material UI. 
                    Mentre per le funzionalità di registrazione, accesso e archiviazione dei dati, ho implementato Firebase.
                </p>           
                {/* <p className=' py-2 mb-5 leading-8 project-description'>
                Una To do list per tracciare i propri impegni giornalieri. <br />
                L’applicazione è stata realizzata con React e Material UI per creare l'interfaccia utente, mentre per le funzionalità di Database e Signup/Login ho implementato Firebase.
                </p>            */}
                <div className='mb-3 text-blue-800 text-sm text-center sm:text-left'>
                    <a href="https://dailytodoroxana.netlify.app/" target='_blank' rel="noreferrer" className='btn hover:text-slate-50 cursor-pointer inline-block mr-5 py-2 px-4 border-2 text-indigo-500  border-indigo-400 rounded-md w-full sm:w-fit'>APRI IL SITO </a>
                    <a href="https://github.com/roxanamihai15/dailytodo" target='_blank' rel="noreferrer" className='btn hover:text-slate-50 cursor-pointer inline-block mr-5 py-2 px-4 border-2 text-indigo-500  border-indigo-400 rounded-md w-full sm:w-fit'> &lt;/&gt;  GUARDA IL CODICE </a>
                </div>
            </div>
        </div>        
    </div>
  )
}

export default Todo