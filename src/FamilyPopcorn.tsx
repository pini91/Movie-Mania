import photo from "./assets/cinema.png"
import family from "./assets/people-watching-movie-.jpg"
import React from 'react';
import './FamilyPopcorn.css';

interface Props {
  isVisible: boolean;
}

const FamilyPopcorn = ({ isVisible }: Props) => {
  if (!isVisible) return null;

  return (
    <>
      {/* Desktop/Tablet View */}
      <div className="family-popcorn">
        <img 
          src={photo}
          alt="Family enjoying popcorn at movies"
          className="family-image"
        />
        <img 
          src={family}
          alt="Family enjoying popcorn at movies"
          className="family-image"
        />
      </div>
      
      {/* Mobile View */}
      <div className="mobile-search-prompt">
        <p>Search movies and explore genres</p>
      </div>
    </>
  );
};

export default FamilyPopcorn;