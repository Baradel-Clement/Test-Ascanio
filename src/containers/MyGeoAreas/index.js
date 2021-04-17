import { connect } from 'react-redux';

import MyGeoAreas from '../../components/MyGeoAreas';
import { switchDisplay, saveGeoAreasStoraged } from '../../actions';

const mapStateToProps = (state) => ({
  myGeoAreasCount: state.myGeoAreas.count,
  geoAreas: state.myGeoAreas.geoAreas,
});

const mapDispatchToProps = (dispatch) => ({
  switchDisplay: () => {
    dispatch(switchDisplay());
  },
  saveGeoAreasStoraged: (geoAreasStorage) => {
    dispatch(saveGeoAreasStoraged(geoAreasStorage));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MyGeoAreas);
