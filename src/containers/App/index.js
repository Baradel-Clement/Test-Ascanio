import { connect } from 'react-redux';

import App from '../../components/App';

const mapStateToProps = (state) => ({
  myGeoAreasDisplay: state.myGeoAreas.display,
  createGeoAreaDisplay: state.createGeoArea.display,
});

export default connect(mapStateToProps)(App);
