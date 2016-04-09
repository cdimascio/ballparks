import React from 'react';
import './back.css';

const extractNameFromLink = url => {
  const name = /http.*:\/\/(.*?)\//.exec(url);
  if (!name || name.length < 1) {
    return name;
  }
  return name[1];
};

const filterLinks = url => {
  let shouldRemove = url.indexOf('retrosheet') > -1;
  return !shouldRemove;
};

const ParkCardBack = ({
  park,
  imageHeight,
  width,
  height
  }) => {
  return (
    <div className="park-card-back-container" style={{height: `${height - 20}px`}}>
      <div>
      <h4>Links</h4>
      {
        park.links
          .filter(filterLinks)
          .map(link => (
            <div><a href={`${link}`}>{extractNameFromLink(link)}</a></div>
          ))
      }
      </div>
      <div className="park-card-back-description-container">
        <h4>About</h4>
        {park.description}
      </div>
    </div>
  );
};

export default ParkCardBack;