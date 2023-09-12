import '../../styles/howItWorks.css';
import { HIWdata } from '../data/HIWdata';
import jeep from '../../assets/jeep.png';

const HowItWorks = () => {
  return (
    <div id='hiw' className='flex-col'>
      <div className='hiw-head flex-col'>
        <h1>How it works</h1>
        <h5>
          Renting a luxury car has never been easier. Our streamlined process
          makes it simple for you to ook and confirm your vehicle of choice
          online.
        </h5>
      </div>
      <div className='hiw-body flex'>
        <div className='hiw-tags '>
          {HIWdata.map((item) => (
            <div key={item.id} className='hiw-tag flex'>
              <span className='hiw-icon'>{item.icon}</span>
              <span className='hiw-text'>
                <h2>{item.head}</h2>
                <h6>{item.desc}</h6>
              </span>
            </div>
          ))}
        </div>
        <div className='hiw-img'>
          <img src={jeep} alt='jeep' />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
