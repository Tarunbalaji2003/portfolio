import { BrowserRouter } from "react-router-dom";
import {profile} from './assets'
import {About,Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas} from './components';

const App = () => { 
  return (
   <div>
      <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />

        <div className="relative z-0">
          <Contact />
          <StarsCanvas />

        </div>
      </div>
      
      </BrowserRouter>
   </div>
  )
}

export default App

/*<div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items -start p2'>
            <motion.dev
            animate={{
              y:[0,24,0]
            }}
            transition={{
              duration:1.5,
              repeat:Infinity,
              repeatType:'loop'
            }}
            className='w-3 h-3 rounded-full bg-secondary mb-1'
             />
          </div>*/