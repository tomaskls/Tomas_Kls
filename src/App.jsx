import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import Hero from './components/Hero';
import { About } from './components/About';
import Tech  from './components/Tech';


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
          <div className="bg-tech bg-cover bg-center bg-no-repeat pb-10">
            <Tech />
          </div>
        </div>
      </BrowserRouter>

    </>
  )
}

export default App
