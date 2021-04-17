import { connect } from 'react-redux';
import AutocompleteInput from '../../components/AutocompleteInput';
import {
  changeAutocompleteInputValue,
  getCommunesToAutocomplete,
  hideAutocompleteCrea,
  addCommuneCrea,
  getPictures,
} from '../../actions';

const mapStateToProps = (state, ownProps) => {
  switch (ownProps.context) {
    case 'CreateGeoArea':
      return {
        autocompleteInputValue: state.createGeoArea.autocompleteInputValue,
        communesToComplete: state.createGeoArea.communesToComplete,
        displayAutocomplete: state.createGeoArea.displayAutocomplete,
        disabledInput: state.createGeoArea.disabledInput,
        geoAreas: state.myGeoAreas.geoAreas,
      };
    case 'GeoArea':
      return {
        autocompleteInputValue:
        state.myGeoAreas.geoAreas[ownProps.indexOfMyGeoArea].autocompleteInputValue,
        communesToComplete: state.myGeoAreas.geoAreas[ownProps.indexOfMyGeoArea].communesToComplete,
        displayAutocomplete:
        state.myGeoAreas.geoAreas[ownProps.indexOfMyGeoArea].displayAutocomplete,
        disabledInput: state.myGeoAreas.geoAreas[ownProps.indexOfMyGeoArea].disabledInput,
        geoAreas: state.myGeoAreas.geoAreas,
      };
    default:
      return null;
  }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  changeAutocompleteInputValue: (value) => {
    dispatch(changeAutocompleteInputValue(value, ownProps.context, ownProps.indexOfMyGeoArea));
    dispatch(getCommunesToAutocomplete(value, ownProps.context, ownProps.indexOfMyGeoArea));
  },
  hideAutocomplete: () => {
    dispatch(hideAutocompleteCrea(ownProps.context, ownProps.indexOfMyGeoArea));
  },
  selectCommune: (value) => {
    dispatch(addCommuneCrea(value, ownProps.context, ownProps.indexOfMyGeoArea));
  },
  addPictures: (commune) => {
    dispatch(getPictures(commune, ownProps.context, ownProps.indexOfMyGeoArea));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AutocompleteInput);
