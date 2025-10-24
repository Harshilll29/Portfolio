import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas, Footer } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary min-h-screen'>
        {/* Hero Section with background pattern */}
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center min-h-screen'>
          <Navbar />
          <Hero />
        </div>
        
        {/* Main Content Sections with proper spacing */}
        <div className='bg-primary'>
          <div className='section-spacing first-section-after-hero' style={{ marginBottom: '80px' }}>
            <About />
          </div>
          
          <div className='section-spacing' style={{ marginBottom: '80px' }}>
            <Experience />
          </div>
          
          <div className='section-spacing' style={{ marginBottom: '80px' }}>
            <Tech />
          </div>
          
          <div className='section-spacing' style={{ marginBottom: '80px' }}>
            <Works />
          </div>
          
          <div className='relative z-0 section-spacing'>
            <Contact />
            <StarsCanvas />
          </div>

          <Footer />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;