import '../../styles/services.css';
import { GoVerified } from 'react-icons/go';
import { BsStars } from 'react-icons/bs';
import { PiHandCoinsDuotone } from 'react-icons/pi';

const Services = () => {
  const size = 30;

  return (
    <div id='services' className='flex-col'>
      <div className='flex-col services-head'>
        <h1>Our Services & Benefits</h1>
        <h5>
          To make easy and hassle-free, we provide a variety of services and
          advantages. We have you covered with a variety of vehicles and
          flexible rental items.
        </h5>
      </div>
      <div className='services-body flex'>
        <div className='flex-col'>
          <span className='flex'>
            <BsStars size={size} />
          </span>
          <h4>Quality Choice</h4>
          <p>
            We offer a wide range of haigh-qualtiy vehicles to choose from,
            including luxury cars, SUV's, vans and more.
          </p>
        </div>

        <div className='flex-col'>
          <span className='flex'>
            <PiHandCoinsDuotone size={size} />
          </span>
          <h4>Affordable Prices </h4>
          <p>
            Our rental rates are highly competitive and affordable, allowing our
            customers to enjoy their trips without breaking the bank.
          </p>
        </div>

        <div className='flex-col'>
          <span className='flex'>
            <GoVerified size={size} />
          </span>
          <h4>Covenient Online Booking</h4>
          <p>
            With our easy-to-use online booking system, customers can quickly
            and conveniently reserve their rental car from anywhere, anytime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
