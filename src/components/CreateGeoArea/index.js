import React from 'react';
import PropTypes from 'prop-types';
import EditableTitle from '../../containers/EditableTitle';

const CreateGeoArea = ({ switchDisplay }) => (
    <div className="createGeoArea">
        <h1>CreateGeoArea</h1>
        <EditableTitle />
        <button onClick={() => switchDisplay()} type="button" className="button">Quittez la création de zone</button>
    </div>
);

CreateGeoArea.propTypes = {
    switchDisplay: PropTypes.func.isRequired,
}

export default CreateGeoArea;