import { Route, Routes } from 'react-router-dom/dist';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Rent from './components/pages/Rent';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <div className='App flex'>
      <div className='app-wrapper'>
        <Navbar />
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route index path='/about' element={<About />} />
          <Route index path='/contact' element={<Contact />} />
          <Route index path='/rent' element={<Rent />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
