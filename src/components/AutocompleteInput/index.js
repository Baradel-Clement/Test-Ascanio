import React from 'react';
import Proptypes from 'prop-types';
import trashIcon from '../../assets/Trash.svg';

const AutocompleteInput = ({
  autocompleteInputValue,
  changeAutocompleteInputValue,
  communesToComplete,
  hideAutocomplete,
  displayAutocomplete,
  selectCommune,
  disabledInput,
  communesSelected,
  removeCommune,
}) => (
  <div className="autcompleteInput">
    <input
      type="search"
      value={autocompleteInputValue}
      onChange={(e) => changeAutocompleteInputValue(e.target.value)}
      disabled={(disabledInput) ? 'disabled' : ''}
      placeholder={disabledInput ? 'Vous ne pouvez pas entrez plus de 3 communes' : 'Cherchez votre commune'}
    />
    <div className="communesToComplete">
      {
            communesToComplete.map((commune) => (
              <div
                onClick={(e) => {
                  selectCommune(e.target.textContent);
                  hideAutocomplete();
                }}
                key={commune.code}
                className={displayAutocomplete ? 'communeToComplete visible' : 'communeToComplete not-visible'}
              >
                {commune.nom}
              </div>
            ))
        }
    </div>
    <div className="communesSelected">
      {
        communesSelected.map((commune) => (
          <div
            onClick={() => {
              removeCommune(commune);
            }}
            className="communeSelected"
            key={commune}
          >
            <p>{commune}</p>
            <img src={trashIcon} alt="trashIcon" />
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
  communesSelected: Proptypes.array,
  removeCommune: Proptypes.func.isRequired,
};

AutocompleteInput.defaultProps = {
  communesToComplete: Proptypes.arrayOf(
    Proptypes.shape({
      nom: Proptypes.string,
      code: Proptypes.string,
    }),
  ),
  communesSelected: Proptypes.array,
};

export default AutocompleteInput;
