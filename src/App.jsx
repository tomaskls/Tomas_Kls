import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import Hero from './components/Hero';
import { About } from './components/About';
import Tech  from './components/Tech';
import Projects from './components/Projects';
import Skills from './components/Skills';
// import ContactComponent from './components/Contacts';
import Contact from './components/Contacts';
import { Footer } from './components/Footer';


function App() {

  return (
    <>
      <BrowserRouter>
        <div className="w-auto relative z-0">
          <div>
            <Navbar />
            <Hero />
          </div>
          <div className="bg-about bg-cover bg-center bg-no-repeat">
            <About />
          </div>
          <div className="bg-tech bg-cover bg-center bg-no-repeat ">
            <Tech />
          </div>
          <div className="bg-tech bg-cover bg-center bg-no-repeat ">
            <Projects />
          </div>
          <div className="bg-zinc-900 bg-tech bg-cover bg-center bg-no-repeat ">
            <Skills />
          </div>
          <div>
            {/* <ContactComponent /> */}
            <Contact />
          </div>
          <Footer />
        </div>
      </BrowserRouter>

    </>
  )
}

export default App
