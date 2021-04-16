import { connect } from 'react-redux';
import GeoArea from '../../components/GeoArea';

import { deleteGeoArea } from '../../actions';

const mapDispatchToProps = (dispatch, ownProps) => ({
  deleteGeoArea: () => {
    dispatch(deleteGeoArea(ownProps.indexOfMyGeoArea));
  },
});

export default connect(null, mapDispatchToProps)(GeoArea);
