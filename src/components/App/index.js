import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import MyGeoAreas from '../../containers/MyGeoAreas';
import CreateGeoArea from '../../containers/CreateGeoArea';

const App = ({ getCommunes, myGeoAreasDisplay, createGeoAreaDisplay }) => {
  useEffect(() => {
    getCommunes();
  }, []);

  return (
    <div className="app">
    { myGeoAreasDisplay && <MyGeoAreas /> }
    { createGeoAreaDisplay && <CreateGeoArea /> }
      
    </div>
  );
};

App.propTypes = {
  getCommunes: PropTypes.func.isRequired,
  myGeoAreasDisplay: PropTypes.bool.isRequired,
  createGeoAreaDisplay: PropTypes.bool.isRequired,
};

export default App;
