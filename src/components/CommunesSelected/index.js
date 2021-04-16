import React from 'react';
import PropTypes from 'prop-types';
import trashIcon from '../../assets/Trash.svg';

const CommunesSelected = ({ communesSelected, removeCommune }) => (
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

CommunesSelected.propTypes = {
  communesSelected: PropTypes.array,
  removeCommune: PropTypes.func.isRequired,
};

CommunesSelected.defaultProps = {
  communesSelected: PropTypes.array,
};

export default CommunesSelected;
