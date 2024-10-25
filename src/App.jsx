import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import Hero from './components/Hero';
import { About } from './components/About';


function App() {

  return (
    <>
      <BrowserRouter>
        <div className="relative z-0">
          <div>
            <Navbar />
            <Hero />
          </div>
          <div className="bg-about bg-cover bg-center bg-no-repeat">
          <About />
        </div>
        </div>
      </BrowserRouter>

    </>
  )
}

export default App
