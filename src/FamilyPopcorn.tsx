import photo from "./assets/cinema.png"
import family from "./assets/people-watching-movie-.jpg"
import genres from "./assets/genres.png"
import React, { useState, useEffect } from 'react';
import './FamilyPopcorn.css';

interface Props {
  isVisible: boolean;
}

const FamilyPopcorn = ({ isVisible }: Props) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [photo, family, genres];

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Switch every 3 seconds

    return () => clearInterval(interval); //cleanup function
  }, [isVisible, images.length]);// This tells React: "Re-run this effect ONLY when these values change"

  if (!isVisible) return null;


  return (
    <>
      {/* Desktop/Tablet View */}
      <div className="family-popcorn">
        <div className="carousel-container">
          {images.map((imgSrc, index) => (
            <img 
              key={index}
              src={imgSrc}
              alt="Family enjoying popcorn at movies"
              className={`family-image ${index === currentImageIndex ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>
      
      {/* Mobile View */}
      <div className="mobile-search-prompt">
        <p>Search movies and explore genres</p>
      </div>
    </>
  );
};

export default FamilyPopcorn;