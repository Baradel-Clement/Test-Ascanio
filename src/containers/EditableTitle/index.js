import { connect } from 'react-redux';
import EditableTitle from '../../components/EditableTitle';
import { editZoneName, updateZoneNameValue } from '../../actions';

const mapStateToProps = (state) => ({
    zoneNameValue: state.createGeoArea.zoneNameValue,
    nameIsInEditMode: state.createGeoArea.nameIsInEditMode,
})

const mapDispatchToProps = (dispatch) => ({
    editZoneName: () => {
        dispatch(editZoneName())
    },
    updateZoneNameValue: (value) => {
        dispatch(updateZoneNameValue(value))
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(EditableTitle);