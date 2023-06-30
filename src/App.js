import './fonts.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage';
import Menu from './Components/Menu/Menu';
import Footer from './Components/Footer/Footer';
import HowItWorks from './Pages/HowItWorks/HowItWorks';
import Pricing from './Pages/Pricing/Pricing';

function App() {

  return (
    <>
      <BrowserRouter basename='/'>
        <Menu />
        <div className='container'>
          <Routes>
            <Route exact path='/' element={<Homepage />} />
            <Route exact path='/how-it-works' element={<HowItWorks />} />
            <Route exact path='/pricing' element={<Pricing />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
