import '../../styles/carBrand.css';
import { carTypes } from '../data/carTypes';
import { carIcons } from '../data/carIcons';
import { BsArrowRight } from 'react-icons/bs';
import { FaMapMarker, FaCalendarAlt } from 'react-icons/fa';

const CarBrand = () => {
  return (
    <section id='car-brand' className='flex-col'>
      <form action='' onSubmit={(e) => e.preventDefault()} className='flex'>
        <label className='flex-col' htmlFor='pick-up-location'>
          <p>Pick-up Location</p>
          <input type='text' id='pick-up-location' />
        </label>
        <label className='flex-col' htmlFor='pick-up-date'>
          <p>Pick-up Date</p>
          <input type='date' id='pick-up-date' />
        </label>
        <label className='flex-col' htmlFor='drop-off-location'>
          <p>Drop-off Location</p>
          <input type='text' id='drop-off-location' />
        </label>
        <label className='flex-col' htmlFor='drop-off-date'>
          <p>Drop-off Date</p>
          <input type='date' id='drop-off-date' />
        </label>
        <button type='submit' className='flex'>
          <span>Find a Vehicle</span>
          <BsArrowRight size={25} />
        </button>
      </form>
      <div className='grid-parent grid-one'>
        <div className='flex-between grid-text'>
          <h4>Rent by Brands </h4>
          <span className='flex'>
            <p>View all</p>
            <BsArrowRight className='arrow' size={30} />
          </span>
        </div>
        <div className='flex rent-by-group'>
          {carIcons.map((car) => (
            <div className='flex-col' key={car.id}>
              <span>{car.img}</span>
              <h6>{car.title}</h6>
            </div>
          ))}
        </div>
      </div>
      <div className='grid-parent'>
        <div className='flex-between grid-text'>
          <h4>Rent by body type</h4>
          <span className='flex'>
            <p>View all</p>
            <BsArrowRight className='arrow' size={30} />
          </span>
        </div>
        <div className='rent-by-group'>
          {carTypes.map((car) => (
            <div className='flex-col' key={car.id}>
              <img src={car.img} alt={car.title} className='svg-img' />
              <h6>{car.title}</h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarBrand;
