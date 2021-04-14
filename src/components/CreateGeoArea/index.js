import React from 'react';
import PropTypes from 'prop-types';
import EditableTitle from '../../containers/EditableTitle';
import AutocompleteInput from '../../containers/AutocompleteInput';

const CreateGeoArea = ({ switchDisplay }) => (
  <div className="createGeoArea">
    <h1>CreateGeoArea</h1>
    <button onClick={() => switchDisplay()} type="button" className="button">Quittez la création de zone</button>
    <EditableTitle />
    <AutocompleteInput />
  </div>
);

CreateGeoArea.propTypes = {
  switchDisplay: PropTypes.func.isRequired,
};

export default CreateGeoArea;
