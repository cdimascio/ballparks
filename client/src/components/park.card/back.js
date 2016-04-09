import React from 'react';
import Tabs from '../tabs/tabs';
import Tab from '../tab/tab';
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
      <Tabs>
        <Tab title={'About'} selected={true}>
          <div className="park-card-back-description-container">
            {park.description}
          </div>
        </Tab>
        <Tab title={'Links'} selected={false}>
          <div>
            <h4>Links</h4>
            {
              park.links
                .filter(filterLinks)
                .map(link => (
                  <div key={link}><a href={`${link}`}>{extractNameFromLink(link)}</a></div>
                ))
            }
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default ParkCardBack;