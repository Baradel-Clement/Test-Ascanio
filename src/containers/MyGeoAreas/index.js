import { connect } from 'react-redux';

import MyGeoAreas from '../../components/MyGeoAreas';
import { switchDisplay } from '../../actions';

const mapStateToProps = (state) => ({
  myGeoAreasCount: state.myGeoAreas.count,
});

const mapDispatchToProps = (dispatch) => ({
  switchDisplay: () => {
    dispatch(switchDisplay());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MyGeoAreas);
