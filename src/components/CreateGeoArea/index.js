import React from 'react';
import PropTypes from 'prop-types';
import EditableTitle from '../../containers/EditableTitle';
import AutocompleteInput from '../../containers/AutocompleteInput';
import CommunesSelected from '../../containers/CommunesSelected';
import CommunesPictures from '../../containers/CommunesPictures';

const CreateGeoArea = ({ switchDisplay }) => (
  <div className="createGeoArea">
    <div className="createGeoArea-custom">
      <EditableTitle context="CreateGeoArea" />
      <AutocompleteInput />
      <CommunesSelected />
      <button onClick={() => switchDisplay()} type="button" className="button">Quittez la création de zone</button>
    </div>
    <CommunesPictures />
  </div>
);

CreateGeoArea.propTypes = {
  switchDisplay: PropTypes.func.isRequired,
};

export default CreateGeoArea;
