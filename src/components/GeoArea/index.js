import React from 'react';
import PropTypes from 'prop-types';
import EditableTitle from '../../containers/EditableTitle';
import CommunesPictures from '../../containers/CommunesPictures';
import AutocompleteInput from '../../containers/AutocompleteInput';
import CommunesSelected from '../../containers/CommunesSelected';
import trashIcon from '../../assets/Trash.svg';

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
      </div>
    </div>
    <CommunesPictures indexOfMyGeoArea={indexOfMyGeoArea} context="GeoArea" />
    <AutocompleteInput indexOfMyGeoArea={indexOfMyGeoArea} context="GeoArea" />
    <CommunesSelected indexOfMyGeoArea={indexOfMyGeoArea} context="GeoArea" />
  </div>
);

GeoArea.propTypes = {
  zoneNameValue: PropTypes.string.isRequired,
  indexOfMyGeoArea: PropTypes.number.isRequired,
  deleteGeoArea: PropTypes.func.isRequired,
};

export default GeoArea;
