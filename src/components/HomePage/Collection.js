import '../../styles/collection.css';

import { BsArrowRight } from 'react-icons/bs';
import CarsCollection from '../CarsCollection';
import { Link } from 'react-router-dom';

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
      <CarsCollection />
      <Link to='/rent'>
        <button className='all-cars flex'>
          <p>see all cars</p>
          <BsArrowRight size={30} />
        </button>
      </Link>
    </div>
  );
};

export default Collection;
