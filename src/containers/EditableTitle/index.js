import { connect } from 'react-redux';
import EditableTitle from '../../components/EditableTitle';
import { editZoneName, updateZoneNameValue } from '../../actions';

const mapStateToProps = (state, ownProps) => {
  switch (ownProps.context) {
    case 'CreateGeoArea':
      return {
        zoneNameValue: state.createGeoArea.zoneNameValue,
        nameIsInEditMode: state.createGeoArea.nameIsInEditMode,
        geoAreas: state.myGeoAreas.geoAreas,
      };
    case 'GeoArea': {
      return {
        zoneNameValue: state.myGeoAreas.geoAreas[ownProps.indexOfMyGeoArea].zoneNameValue,
        nameIsInEditMode: state.myGeoAreas.geoAreas[ownProps.indexOfMyGeoArea].nameIsInEditMode,
        geoAreas: state.myGeoAreas.geoAreas,
      };
    }

    default:
      return null;
  }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  editZoneName: () => {
    dispatch(editZoneName(ownProps.context, ownProps.indexOfMyGeoArea));
  },
  updateZoneNameValue: (value) => {
    dispatch(updateZoneNameValue(value, ownProps.context, ownProps.indexOfMyGeoArea));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EditableTitle);
