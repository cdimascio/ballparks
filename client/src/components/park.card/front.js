import React from 'react';
import './front.css';

const ParkCardFront = ({
  park,
  imageHeight,
  width,
  height
  }) => {
  const dHeight = height - 300;// - 30;
  return (
    <div className="front-container">
      <div className="image" style={{
        margin: '0px 0px 0px 0px',
        height: height ? `${imageHeight}px` : '300px',
        //width: width ? `${width}px` : '350px',
        'background-image': `url(${park.image.thumb})`,
        'background-size': 'cover',
        'background-repeat': 'no-repeat',
        'background-position': 'center'
      }}>
        <div className="spacer"></div>
        <h4 className="name">{park.name}</h4>
      </div>
      <div style={{height: `${dHeight}px`}}>
        <div className="description" style={{height: `${dHeight - 90}px`}}>{park.comment}</div>
        <div className="weather-container">
          <div className="weather-top">
            <div className="weather-image">
              <img className="media-object weather-current-icon"
                   src={`images/twc/icon${park.weather.observation.wx_icon}.png`}/>
            </div>
            <div className="weather-temp">
              {park.weather.observation.temp}° F
            </div>
          </div>
          <div className="weather-phrase">
            {park.weather.wx_phrase}
          </div>
        </div>
      </div>


    </div>
  );
};

export default ParkCardFront;