import { connect } from 'react-redux';
import GeoArea from '../../components/GeoArea';

import { deleteGeoArea, askDeleteConfirmation, cancelDeleteGeoArea } from '../../actions';

const mapStateToProps = (state, ownProps) => ({
  confirmationDelete: state.myGeoAreas.geoAreas[ownProps.indexOfMyGeoArea].confirmationDelete,
  geoAreas: state.myGeoAreas.geoAreas,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  askDeleteConfirmation: () => {
    dispatch(askDeleteConfirmation(ownProps.indexOfMyGeoArea));
  },
  deleteGeoArea: () => {
    dispatch(deleteGeoArea(ownProps.indexOfMyGeoArea));
  },
  cancelDeleteGeoArea: () => {
    dispatch(cancelDeleteGeoArea(ownProps.indexOfMyGeoArea));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(GeoArea);
