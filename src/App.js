import { Route, Routes } from 'react-router-dom/dist';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route index path='/' element={<Home />} />
        {/* <Route path='*' element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
