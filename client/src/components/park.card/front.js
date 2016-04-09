import React from 'react';
import Card from '../card/card';
import './front.css';

const ParkCardFront = ({
  park,
  imageHeight,
  width,
  height
  }) => {
  const dHeight = height - 300;// - 30;
  return (
    <div className="fcontainer">
      <div className="image" style={{
        margin: '0px 0px 0px 0px',
        height: height ? `${imageHeight}` : '300px',
        'background-image': `url(${park.image.thumb})`,
        'background-size': 'cover',
        'background-repeat': 'no-repeat',
        'background-position': 'center'
      }}>
        <div className="spacer"></div>
        <h4 className="name">{park.name}</h4>
      </div>
      <div style={{height: `${dHeight}px`}}>
        <div className="description" style={{height: `${dHeight - 90}px`}}>{park.description}</div>
        <div className="weather-container">
          <div className="weather-top">
            <div className="weather-image">
              <img className="media-object weather-current-icon"
                   src={`images/twc/icon${park.weather.observation.icon_code}.png`}/>
            </div>
            <div className="weather-temp">
              {park.weather.observation.imperial.temp}° F
            </div>
          </div>
          <div className="weather-phrase">
            {park.weather.observation.phrase_32char}
          </div>
        </div>
      </div>


    </div>
  );
};

export default ParkCardFront;