import React from 'react';
import PropTypes from 'prop-types';

const EditableTitle = ({ zoneNameValue, nameIsInEditMode, editZoneName, updateZoneNameValue }) => {
    const renderEditView = () => {
        return <div>
            <input type="text" value={zoneNameValue} onChange={(e) => updateZoneNameValue(e.target.value)} />
            <button onClick={() => editZoneName()}>OK</button>
        </div>
    }
    const renderDefaultVew = () => {
        return <div onDoubleClick={() => editZoneName()}>
            {zoneNameValue}
        </div>
    }
    return (
        <div>
            {
                nameIsInEditMode ? renderEditView() : renderDefaultVew()
            }
        </div>
    );
}
    
EditableTitle.propTypes = {
    zoneNameValue: PropTypes.string.isRequired,
    editZoneName: PropTypes.func.isRequired,
    nameIsInEditMode: PropTypes.bool.isRequired,
    updateZoneNameValue: PropTypes.func.isRequired,
}

export default EditableTitle;