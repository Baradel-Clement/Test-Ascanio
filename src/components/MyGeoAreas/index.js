import React from 'react';
import PropTypes from 'prop-types';
import GeoArea from '../../containers/GeoArea';

const MyGeoAreas = ({ myGeoAreasCount, switchDisplay, geoAreas }) => (
  <div className="myGeoAreas-wrap">
    {
      myGeoAreasCount === 0 && (
        <h1>Vous n'avez pas encore créer de zones géographiques</h1>
      )
    }
    {
      myGeoAreasCount !== 0 && (
        <>
          <h1>Vos zones géographiques :</h1>
          <div className="myGeoAreas">
            {
          geoAreas.map((geoArea, index) => (
            <GeoArea key={geoArea.zoneNameValue} indexOfMyGeoArea={index} {...geoArea} />
          ))
        }
          </div>
        </>
      )
    }
    <button onClick={() => switchDisplay()} type="button" className="button">Ajouter une zone</button>
  </div>
);

MyGeoAreas.propTypes = {
  myGeoAreasCount: PropTypes.number.isRequired,
  switchDisplay: PropTypes.func.isRequired,
  geoAreas: PropTypes.array,
};

MyGeoAreas.defaultProps = {
  geoAreas: PropTypes.array,
};

export default MyGeoAreas;
