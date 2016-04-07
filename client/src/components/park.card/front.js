import React from 'react';
import Card from '../card/card';

const ParkCardFront = ({
  title,
  imageSrc
  }) => {
  return (
    <div>
      <div style={{
        height:'200px',
        'background-image': `url(${imageSrc})`,
        'background-size': 'cover',
        'background-repeat': 'no-repeat',
        'background-position': 'center'
      }}>
      </div>
      <div>{title}</div>
    </div>
  );
};

export default ParkCardFront;