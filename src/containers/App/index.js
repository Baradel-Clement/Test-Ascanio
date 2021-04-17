import { connect } from 'react-redux';

import App from '../../components/App';
import { saveGeoAreasStoraged } from '../../actions';

const mapStateToProps = (state) => ({
  myGeoAreasDisplay: state.myGeoAreas.display,
  createGeoAreaDisplay: state.createGeoArea.display,
});

const mapDispatchToProps = (dispatch) => ({
  saveGeoAreasStoraged: (geoAreasStorage) => {
    dispatch(saveGeoAreasStoraged(geoAreasStorage));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
