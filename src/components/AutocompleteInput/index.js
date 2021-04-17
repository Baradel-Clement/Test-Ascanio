/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
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
  communesSelected,
  context,
  geoAreas,
}) => {
  useEffect(() => {
    if (context === 'GeoArea') {
      localStorage.setItem('geoAreas', JSON.stringify(geoAreas));
    }
  });
  return (
    <div className="autocompleteInput-wrap">
      <label htmlFor="autocompleteInputCrea">Ville(s) (maximum 3)</label>
      <input
        type="search"
        name="autocompleteInputCrea"
        autoComplete="off"
        className="autocompleteInputCrea"
        value={autocompleteInputValue}
        onChange={(e) => changeAutocompleteInputValue(e.target.value)}
        disabled={(disabledInput) ? 'disabled' : ''}
        placeholder="Cherchez votre ville"
      />
      <div className="communesToComplete">
        {
            communesToComplete.map((commune) => (
              <div
                onClick={(e) => {
                  let sameCommune = false;
                  communesSelected.forEach((element) => {
                    if (element === e.target.textContent) {
                      sameCommune = true;
                    }
                  });
                  if (sameCommune) {
                    alert('Vous ne pouvez pas choisir une ville déjà sélectionnée.');
                  }
                  else {
                    selectCommune(e.target.textContent);
                    hideAutocomplete();
                    addPictures(commune.nom);
                  }
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
};

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
  context: Proptypes.string.isRequired,
  geoAreas: Proptypes.array,
  communesSelected: Proptypes.array,
};

AutocompleteInput.defaultProps = {
  communesToComplete: Proptypes.arrayOf(
    Proptypes.shape({
      nom: Proptypes.string,
      code: Proptypes.string,
    }),
  ),
  geoAreas: Proptypes.array,
  communesSelected: Proptypes.array,
};

export default AutocompleteInput;
