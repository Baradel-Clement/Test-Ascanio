import React from 'react';
import PropTypes from 'prop-types';
import EditableTitle from '../../containers/EditableTitle';
import trashIcon from '../../assets/Trash.svg';
import penIcon from '../../assets/Pen.svg';

const GeoArea = ({ zoneNameValue, indexOfMyGeoArea, deleteGeoArea }) => (
  <div className="geoArea">
    <div className="geoArea_header">
      <EditableTitle context="GeoArea" indexOfMyGeoArea={indexOfMyGeoArea} geoArea={zoneNameValue} />
      <div className="geoArea_header_options">
        <img
          onClick={deleteGeoArea}
          src={trashIcon}
          alt="trashIcon"
        />
        <img src={penIcon} alt="penIcon" />
      </div>
    </div>
  </div>
);

GeoArea.propTypes = {
  zoneNameValue: PropTypes.string.isRequired,
  indexOfMyGeoArea: PropTypes.number.isRequired,
  deleteGeoArea: PropTypes.func.isRequired,
};

export default GeoArea;
