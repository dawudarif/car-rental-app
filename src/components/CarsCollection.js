import { collection } from './data/collection';
import { BiGasPump } from 'react-icons/bi';
import { BsPeopleFill } from 'react-icons/bs';
import { TbManualGearbox } from 'react-icons/tb';
import { SlSpeedometer } from 'react-icons/sl';

const CarsCollection = () => {
  return (
    <div className='collection-body'>
      {collection.map((car) => (
        <div key={car.id} className='collection-item'>
          <img className='collection-img' src={car.img} alt={car.title} />
          <h4>{car.title}</h4>
          <span className='flex'>
            <h4>{car.price}</h4>
            <p>/ day</p>
          </span>
          <div className='cars-absolute'>
            <div className='collection-info flex'>
              <span className='flex-col'>
                <SlSpeedometer size={18} />
                <p>{car.miles}</p>
              </span>
              <span className='flex-col'>
                <TbManualGearbox size={18} />
                <p>{car.gear}</p>
              </span>
              <span className='flex-col'>
                <BsPeopleFill size={18} />
                <p>{car.seating}</p>
              </span>
              <span className='flex-col'>
                <BiGasPump size={18} />
                <p>{car.fuel}</p>
              </span>
            </div>
            <button className='flex'>Rent</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarsCollection;
