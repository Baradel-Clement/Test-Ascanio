import React from 'react';
import PropTypes from 'prop-types';
import MyGeoAreas from '../../containers/MyGeoAreas';
import CreateGeoArea from '../../containers/CreateGeoArea';
import '../../styles/index.scss';

const App = ({ myGeoAreasDisplay, createGeoAreaDisplay }) => (
  <div className="app">
    { myGeoAreasDisplay && <MyGeoAreas /> }
    { createGeoAreaDisplay && <CreateGeoArea /> }

  </div>
);

App.propTypes = {
  myGeoAreasDisplay: PropTypes.bool.isRequired,
  createGeoAreaDisplay: PropTypes.bool.isRequired,
};

export default App;
