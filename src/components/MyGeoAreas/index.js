import React from 'react';
import PropTypes from 'prop-types';

const MyGeoAreas = ({ communes, myGeoAreasCount, switchDisplay }) => (
  <div className="myGeoAreas">
    {
      myGeoAreasCount === 0 && (
        <h1>Vous n'avez pas encore créer de zones géographiques</h1>
      )
    }
    {
      myGeoAreasCount !== 0 && (
        <h1>Vos zones géographiques :</h1>
      )
    }
    <button onClick={() => switchDisplay()} type="button" className="button">Ajouter une zone</button>
  </div>
);

MyGeoAreas.propTypes = {
  communes: PropTypes.array,
  myGeoAreasCount: PropTypes.number.isRequired,
  switchDisplay: PropTypes.func.isRequired,
};

MyGeoAreas.defaultProps = {
  communes: PropTypes.array,
};

export default MyGeoAreas;
