import React from 'react';
//import './tab.css';

const Tab = ({
  title,
  selected,
  children
  }) => {
  // TODO ensure children are all tab objects
  return (
    <div>
      { children }
    </div>
  );
};

export default Tab;