import { connect } from 'react-redux';

import App from '../../components/App';
import { getCommunes } from '../../actions';

const mapStateToProps = (state) => ({
  myGeoAreasDisplay: state.myGeoAreas.display,
  createGeoAreaDisplay: state.createGeoArea.display,
})

const mapDispatchToProps = (dispatch) => ({
  getCommunes: () => {
    dispatch(getCommunes());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
