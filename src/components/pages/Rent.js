import React, { useState } from 'react';
import CarsCollection from '../CarsCollection';
import '../../styles/rent.css';

const tags = ['All', 'Popular', 'Vintage', 'Luxury', 'Family', 'Off-Road'];

const Rent = () => {
  const [view, setView] = useState('All');

  return (
    <div id='rent' className='flex-col'>
      <h1>Rent a Car</h1>
      <div className='flex tags'>
        {tags.map((tag) => (
          <span
            key={tag}
            onClick={() => setView(tag)}
            className={`${view === tag ? 'tag-match' : 'tag-nomatch'}`}
          >
            {tag}
          </span>
        ))}
      </div>
      <div className='rent-collection'>
        <CarsCollection />
      </div>
    </div>
  );
};

export default Rent;
