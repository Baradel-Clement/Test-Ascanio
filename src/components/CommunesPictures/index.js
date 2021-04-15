import React from 'react';
import Proptypes from 'prop-types';

const CommunesPictures = ({ pictures }) => (
  <div className="communesPictures">
    {
      pictures.map((pic) => (
        <div key={pic.src} className="communePic">
          <img src={pic.src} alt="communePic" />
        </div>
      ))
    }
  </div>
);

CommunesPictures.propTypes = {
  pictures: Proptypes.arrayOf(
    Proptypes.shape({
      src: Proptypes.string,
      commune: Proptypes.string,
    }),
  ),
};

CommunesPictures.defaultProps = {
  pictures: Proptypes.arrayOf(
    Proptypes.shape({
      src: Proptypes.string,
      commune: Proptypes.string,
    }),
  ),
};

export default CommunesPictures;
