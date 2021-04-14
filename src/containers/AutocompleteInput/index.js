import { connect } from 'react-redux';
import AutocompleteInput from '../../components/AutocompleteInput';
import { changeAutocompleteInputValue, getCommunesToAutocomplete } from '../../actions';

const mapStateToProps = (state) => ({
  autocompleteInputValue: state.createGeoArea.autocompleteInputValue,
});

const mapDispatchToProps = (dispatch) => ({
  changeAutocompleteInputValue: (value) => {
    dispatch(changeAutocompleteInputValue(value));
    dispatch(getCommunesToAutocomplete(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AutocompleteInput);
