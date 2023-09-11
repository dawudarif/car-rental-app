import CarBrand from '../HomePage/CarBrand';
import Hero from '../HomePage/Hero';
import HowItWorks from '../HomePage/HowItWorks';
import Collection from '../../components/HomePage/Collection';
import Services from '../HomePage/Services';
import Testimonials from '../HomePage/Testimonials';

const Home = () => {
  return (
    <>
      <Hero />
      <CarBrand />
      <Collection />
      <HowItWorks />
      <Services />
      <Testimonials />
    </>
  );
};

export default Home;
