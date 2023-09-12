import '../../styles/testimonials.css';
import { BsArrowLeft, BsArrowRight, BsQuote } from 'react-icons/bs';
import { testimonialData } from '../data/testimonialData';

const Testimonials = () => {
  const size = 50;

  const slideLeft = () => {
    let slider = document.querySelector('.slider-parent');
    if (slider) {
      const itemWidth = slider.querySelector('.single-quote').clientWidth;
      slider.scrollLeft -= itemWidth;
    }
  };

  const slideRight = () => {
    let slider = document.querySelector('.slider-parent');
    if (slider) {
      const itemWidth = slider.querySelector('.single-quote').clientWidth;
      slider.scrollLeft += itemWidth;
    }
  };

  return (
    <div id='say'>
      <div className='say-head flex'>
        <h1>What Our Customers Say</h1>
        <div className='flex'>
          <button className='flex' onClick={slideLeft}>
            <BsArrowLeft size={size} />
          </button>
          <button className='flex' onClick={slideRight}>
            <BsArrowRight size={size} />
          </button>
        </div>
      </div>
      <div className='slider-parent'>
        <div className='say-body flex' id='quotes'>
          {testimonialData.map((item) => (
            <div key={item.id} className='single-quote'>
              <BsQuote size={size} />
              <p className='quote'>{item.testimonial}</p>
              <div>
                <h6>{item.name}</h6>
                <span className='flex'>
                  <p>From</p>
                  <h5>{item.city}</h5>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
