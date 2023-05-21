import React from 'react';
import Photo from './Photo';
import './css/Gallery.css';

const Gallery = ({ photos }) => {
    return (
      <div className="gallery-container">
        {photos.map((photo, index) => (
          <Photo
            key={index}
            src={photo.src}
            alt={photo.alt}
            title={photo.title} // Provide the title prop for each photo
          />
        ))}
      </div>
    );
  };

export default Gallery;


