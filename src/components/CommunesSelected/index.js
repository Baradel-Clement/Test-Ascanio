import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import trashIcon from '../../assets/Trash.svg';

const CommunesSelected = ({
  communesSelected, removeCommune, context, geoAreas,
}) => {
  useEffect(() => {
    if (context === 'GeoArea') {
      localStorage.setItem('geoAreas', JSON.stringify(geoAreas));
    }
  });
  return (
    <div className="communesSelected">
      {
        communesSelected.map((commune) => (
          <div
            onClick={() => {
              removeCommune(commune);
            }}
            className="communeSelected"
            key={commune}
          >
            <p>{commune}</p>
            <img src={trashIcon} alt="trashIcon" />
          </div>
        ))
        }
    </div>
  );
};

CommunesSelected.propTypes = {
  communesSelected: PropTypes.array,
  removeCommune: PropTypes.func.isRequired,
  context: PropTypes.string.isRequired,
  geoAreas: PropTypes.array,
};

CommunesSelected.defaultProps = {
  communesSelected: PropTypes.array,
  geoAreas: PropTypes.array,
};

export default CommunesSelected;
