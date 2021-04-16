import React from 'react';
import PropTypes from 'prop-types';

const EditableTitle = ({
  zoneNameValue, nameIsInEditMode, editZoneName, updateZoneNameValue,
}) => {
  const renderEditView = () => (
    <div>
      <input type="text" value={zoneNameValue} onChange={(e) => updateZoneNameValue(e.target.value)} />
      <button type="button" className="button" onClick={() => editZoneName()}>OK</button>
    </div>
  );
  const renderDefaultVew = () => (
    <div onClick={() => editZoneName()}>
      {zoneNameValue}
    </div>
  );
  return (
    <div className="editableTitle-wrap">
      {
                nameIsInEditMode ? renderEditView() : renderDefaultVew()
            }
    </div>
  );
};

EditableTitle.propTypes = {
  zoneNameValue: PropTypes.string.isRequired,
  editZoneName: PropTypes.func.isRequired,
  nameIsInEditMode: PropTypes.bool.isRequired,
  updateZoneNameValue: PropTypes.func.isRequired,
};

export default EditableTitle;
