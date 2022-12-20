import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Progetti from "./components/Progetti/Progetti";
import Skills from "./components/Skills/Skills";

function App() {


  const divAnimated = document.querySelectorAll('.anim')

  const observer = new IntersectionObserver((entries) => {
      console.log(entries);

      entries.forEach(entry => {
          if(entry.isIntersecting) {
              entry.target.style.animation =  `anim1 4s ${entry.target.dataset.delay} forwards ease-out`
          }
      })
  })

  divAnimated.forEach(div => {
      observer.observe(div)
  })




  return (
    
    <div className="bg-slate-50">
      {/* <div className="background">
      <section className="glass"> */}


      <Navbar />
      

      <Header />
      <Skills />
      <Progetti />

      <Contact />
      <Footer />

      {/* </section>
      </div>

      <div className="circle1"></div>
      <div className="circle2"></div> */}

    </div>
  );
}

export default App;
