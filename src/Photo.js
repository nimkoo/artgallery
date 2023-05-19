import React from 'react';
import './css/Photo.css';

const Photo = ({ src, alt, title }) => {
  return (
    <div className="photo">
      <img src={src} alt={alt} />
      <div className="title">{title}</div>
    </div>
  );
};

export default Photo;
