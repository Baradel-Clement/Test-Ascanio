import { connect } from 'react-redux';
import CommunesSelected from '../../components/CommunesSelected';
import {
  removeCommuneCrea,
  hideAutocompleteCrea,
} from '../../actions';

const mapStateToProps = (state, ownProps) => {
  switch (ownProps.context) {
    case 'CreateGeoArea':
      return {
        communesSelected: state.createGeoArea.communesSelected,
        geoAreas: state.myGeoAreas.geoAreas,
      };
    case 'GeoArea':
      return {
        communesSelected: state.myGeoAreas.geoAreas[ownProps.indexOfMyGeoArea].communesSelected,
        geoAreas: state.myGeoAreas.geoAreas,
      };
    default:
      return null;
  }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  removeCommune: (commune) => {
    dispatch(removeCommuneCrea(commune, ownProps.context, ownProps.indexOfMyGeoArea));
    dispatch(hideAutocompleteCrea(ownProps.context, ownProps.indexOfMyGeoArea));
    dispatch(hideAutocompleteCrea(ownProps.context, ownProps.indexOfMyGeoArea));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CommunesSelected);
