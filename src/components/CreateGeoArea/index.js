import React from 'react';
import PropTypes from 'prop-types';
import EditableTitle from '../../containers/EditableTitle';
import AutocompleteInput from '../../containers/AutocompleteInput';
import CommunesSelected from '../../containers/CommunesSelected';
import CommunesPictures from '../../containers/CommunesPictures';

const CreateGeoArea = ({ switchDisplay, saveGeoArea, saveButtonDisabled }) => (
  <div className="createGeoArea">
    <div className="createGeoArea-custom">
      <EditableTitle context="CreateGeoArea" />
      <AutocompleteInput context="CreateGeoArea" />
      <CommunesSelected context="CreateGeoArea" />
      <button onClick={() => switchDisplay()} type="button" className="button">Quittez la création de zone</button>
    </div>
    <CommunesPictures context="CreateGeoArea" />
    <div className="button-wrap">
      <button
        onClick={() => {
          saveGeoArea();
        }}
        disabled={(saveButtonDisabled) ? 'disabled' : ''}
        type="button"
        className={saveButtonDisabled ? 'button disabled' : 'button'}
      >Sauvegardez la zone
      </button>
    </div>
  </div>
);

CreateGeoArea.propTypes = {
  switchDisplay: PropTypes.func.isRequired,
  saveGeoArea: PropTypes.func.isRequired,
  saveButtonDisabled: PropTypes.bool.isRequired,
};

export default CreateGeoArea;
