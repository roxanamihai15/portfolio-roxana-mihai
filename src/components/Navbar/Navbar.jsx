import { useRef } from 'react'
import './Navbar.css'
import { RxHamburgerMenu } from 'react-icons/rx'
import { VscClose } from 'react-icons/vsc'


function Navbar() {

  const navRef = useRef();
  const navRefColor = useRef([]);

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive-nav");
		navRefColor.current.classList.toggle("white-mode");
	};

  return (
    <nav className='flex justify-between text-md 2xl:text-xl py-5 px-10 max-w-screen-xl mx-auto custom-color' id='home' ref={navRefColor}>
        <a href='#home' className='logo text-slate-600 font-medium text-xl'>Roxana Mihai</a>
        <button onClick={showNavbar} className='nav-btn text-2xl py-1 px-3 text-slate-600'> <RxHamburgerMenu />  </button>
        <ul ref={navRef} className=' items-center gap-6 font-normal '>
            <li><a onClick={showNavbar} href="#about">Chi sono</a></li>
            <li><a onClick={showNavbar} href="#competenze">Competenze</a></li>
            <li><a onClick={showNavbar} href="#progetti">Progetti</a></li>
            <button onClick={showNavbar} className='nav-btn nav-close-btn text-2xl' > <VscClose /> </button>
        </ul>
    </nav>
  )
}

export default Navbar