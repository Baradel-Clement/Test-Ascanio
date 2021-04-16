/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Proptypes from 'prop-types';

const AutocompleteInput = ({
  autocompleteInputValue,
  changeAutocompleteInputValue,
  communesToComplete,
  hideAutocomplete,
  displayAutocomplete,
  selectCommune,
  disabledInput,
  addPictures,
}) => (
  <div className="autocompleteInput-wrap">
    <label htmlFor="autocompleteInputCrea">Ville</label>
    <input
      type="search"
      name="autocompleteInputCrea"
      autoComplete="off"
      className="autocompleteInputCrea"
      value={autocompleteInputValue}
      onChange={(e) => changeAutocompleteInputValue(e.target.value)}
      disabled={(disabledInput) ? 'disabled' : ''}
      placeholder={disabledInput ? 'Vous ne pouvez pas entrez plus de 3 communes' : 'Cherchez votre ville'}
    />
    <div className="communesToComplete">
      {
            communesToComplete.map((commune) => (
              <div
                onClick={(e) => {
                  selectCommune(e.target.textContent);
                  hideAutocomplete();
                  addPictures(commune.nom);
                }}
                key={commune.code}
                className={displayAutocomplete ? 'communeToComplete visible' : 'communeToComplete not-visible'}
              >
                {commune.nom}
              </div>
            ))
        }
    </div>
  </div>
);

AutocompleteInput.propTypes = {
  autocompleteInputValue: Proptypes.string.isRequired,
  changeAutocompleteInputValue: Proptypes.func.isRequired,
  communesToComplete: Proptypes.arrayOf(
    Proptypes.shape({
      nom: Proptypes.string,
      code: Proptypes.string,
    }),
  ),
  hideAutocomplete: Proptypes.func.isRequired,
  displayAutocomplete: Proptypes.bool.isRequired,
  selectCommune: Proptypes.func.isRequired,
  disabledInput: Proptypes.bool.isRequired,
  addPictures: Proptypes.func.isRequired,
};

AutocompleteInput.defaultProps = {
  communesToComplete: Proptypes.arrayOf(
    Proptypes.shape({
      nom: Proptypes.string,
      code: Proptypes.string,
    }),
  ),
};

export default AutocompleteInput;
