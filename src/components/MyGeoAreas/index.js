import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import GeoArea from '../../containers/GeoArea';

const MyGeoAreas = ({
  myGeoAreasCount, switchDisplay, geoAreas, saveGeoAreasStoraged,
}) => {
  const [init, setInit] = useState(true);
  useEffect(() => {
    if (!(JSON.parse(localStorage.getItem('geoAreas')))) {
      localStorage.setItem('geoAreas', '[]');
    }
    if ((JSON.parse(localStorage.getItem('geoAreas')).length !== 0) && (geoAreas.length === 0) && (init === true)) {
      const geoAreasStoraged = JSON.parse(localStorage.getItem('geoAreas'));
      saveGeoAreasStoraged(geoAreasStoraged);
    }
    if (init === false) {
      localStorage.setItem('geoAreas', JSON.stringify(geoAreas));
    }
    setInit(false);
  });

  return (
    <div className="myGeoAreas-wrap">
      {
      myGeoAreasCount === 0 && (
        <h1>Vous n'avez pas encore créé de zones géographiques</h1>
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
      <button onClick={() => switchDisplay()} type="button" className="button addZoneBtn">Ajoutez une zone</button>
    </div>
  );
};

MyGeoAreas.propTypes = {
  myGeoAreasCount: PropTypes.number.isRequired,
  switchDisplay: PropTypes.func.isRequired,
  geoAreas: PropTypes.array,
  saveGeoAreasStoraged: PropTypes.func.isRequired,
};

MyGeoAreas.defaultProps = {
  geoAreas: PropTypes.array,
};

export default MyGeoAreas;
