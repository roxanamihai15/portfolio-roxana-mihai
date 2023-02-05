import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Progetti from "./components/Progetti/Progetti";
import Skills from "./components/Skills/Skills";

function App() {

  return (
    <div className="bg-slate-50">
      <div class="pattern">
        <Navbar />
        <Header />
      </div>
      <Skills />
      <Progetti />
      <div className="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
