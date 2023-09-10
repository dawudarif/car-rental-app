import '../../styles/collection.css';
import { collection } from '../data/collection';
import { BiGasPump } from 'react-icons/bi';
import { BsPeopleFill } from 'react-icons/bs';
import { TbManualGearbox } from 'react-icons/tb';
import { SlSpeedometer } from 'react-icons/sl';
import { BsArrowRight } from 'react-icons/bs';

const Collection = () => {
  return (
    <div id='collection' className='flex-col'>
      <div className='collection-head flex-col'>
        <h1>Our impressive collection of cars</h1>
        <h6>
          Ranging from elegant sedans to powerful sports cars, all acrefully
          selected to provide our customers with the ultimate experience.
        </h6>
      </div>
      <div className='collection-body'>
        {collection.map((car) => (
          <div key={car.id} className='collection-item'>
            <img className='collection-img' src={car.img} alt={car.title} />
            <h4>{car.title}</h4>
            <span className='flex'>
              <h4>{car.price}</h4>
              <p>/ day</p>
            </span>
            <div className='collection-info flex'>
              <span className='flex-col'>
                <SlSpeedometer size={25} />
                <p>{car.miles}</p>
              </span>
              <span className='flex-col'>
                <TbManualGearbox size={25} />
                <p>{car.gear}</p>
              </span>
              <span className='flex-col'>
                <BsPeopleFill size={25} />
                <p>{car.seating}</p>
              </span>
              <span className='flex-col'>
                <BiGasPump size={25} />
                <p>{car.fuel}</p>
              </span>
            </div>
            <button>Rent</button>
          </div>
        ))}
      </div>
      <button className='all-cars flex'>
        <p>see all cars</p>
        <BsArrowRight size={30} />
      </button>
    </div>
  );
};

export default Collection;
