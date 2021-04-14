import React from 'react';
import Proptypes from 'prop-types';

const AutocompleteInput = ({ autocompleteInputValue, changeAutocompleteInputValue }) => (
  <div className="autcompleteInput">
    <input type="text" value={autocompleteInputValue} onChange={(e) => changeAutocompleteInputValue(e.target.value)} />
  </div>
);

AutocompleteInput.propTypes = {
  autocompleteInputValue: Proptypes.string.isRequired,
  changeAutocompleteInputValue: Proptypes.func.isRequired,
};

export default AutocompleteInput;
