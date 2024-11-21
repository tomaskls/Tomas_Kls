import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import Hero from './components/Hero';
import { About } from './components/About';
import Tech from './components/Tech';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contacts';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="w-auto relative z-0">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Tech />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
