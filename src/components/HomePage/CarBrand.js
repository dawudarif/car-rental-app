import '../../styles/carBrand.css';
import { carTypes } from '../data/carTypes';

const CarBrand = () => {
  return (
    <div>
      {carTypes.map((car) => (
        <div key={car.id}>
          <img src={car.img} alt={car.title} />
          <h6>{car.title}</h6>
        </div>
      ))}
    </div>
  );
};

export default CarBrand;
