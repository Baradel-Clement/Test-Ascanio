import { connect } from 'react-redux';
import AutocompleteInput from '../../components/AutocompleteInput';
import {
  changeAutocompleteInputValue,
  getCommunesToAutocomplete,
  hideAutocompleteCrea,
  addCommuneCrea,
  getPictures,
} from '../../actions';

const mapStateToProps = (state) => ({
  autocompleteInputValue: state.createGeoArea.autocompleteInputValue,
  communesToComplete: state.createGeoArea.communesToComplete,
  displayAutocomplete: state.createGeoArea.displayAutocomplete,
  disabledInput: state.createGeoArea.disabledInput,
});

const mapDispatchToProps = (dispatch) => ({
  changeAutocompleteInputValue: (value) => {
    dispatch(changeAutocompleteInputValue(value));
    dispatch(getCommunesToAutocomplete(value));
  },
  hideAutocomplete: () => {
    dispatch(hideAutocompleteCrea());
  },
  selectCommune: (value) => {
    dispatch(addCommuneCrea(value));
  },
  addPictures: (commune) => {
    dispatch(getPictures(commune));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AutocompleteInput);
