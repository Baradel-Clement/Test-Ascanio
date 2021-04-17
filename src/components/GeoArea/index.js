import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import EditableTitle from '../../containers/EditableTitle';
import CommunesPictures from '../../containers/CommunesPictures';
import AutocompleteInput from '../../containers/AutocompleteInput';
import CommunesSelected from '../../containers/CommunesSelected';
import trashIcon from '../../assets/Trash.svg';

const GeoArea = ({
  zoneNameValue,
  indexOfMyGeoArea,
  deleteGeoArea,
  confirmationDelete,
  askDeleteConfirmation,
  cancelDeleteGeoArea,
  geoAreas,
}) => {
  useEffect(() => {
    localStorage.setItem('geoAreas', JSON.stringify(geoAreas));
  });
  return (
    <div className="geoArea">
      <div className={confirmationDelete ? 'geoArea_header geoArea_header_delete' : 'geoArea_header'}>
        <EditableTitle context="GeoArea" indexOfMyGeoArea={indexOfMyGeoArea} geoArea={zoneNameValue} />
        <div className={confirmationDelete ? 'geoArea_header_options geoArea_header_options_delete' : 'geoArea_header_options'}>
          {
          confirmationDelete && (
            <>
              <p>Votre zone sera définitivement supprimer :</p>
              <button onClick={cancelDeleteGeoArea} type="button" id="cancelDelete">Annuler</button>
              <button onClick={deleteGeoArea} type="button" id="confirmDelete">Confirmer</button>
            </>
          )
        }
          {
          !confirmationDelete && (
            <img
              onClick={askDeleteConfirmation}
              src={trashIcon}
              alt="trashIcon"
            />
          )
        }
        </div>
      </div>
      <CommunesPictures indexOfMyGeoArea={indexOfMyGeoArea} context="GeoArea" />
      <AutocompleteInput indexOfMyGeoArea={indexOfMyGeoArea} context="GeoArea" />
      <CommunesSelected indexOfMyGeoArea={indexOfMyGeoArea} context="GeoArea" />
    </div>
  );
};

GeoArea.propTypes = {
  zoneNameValue: PropTypes.string.isRequired,
  indexOfMyGeoArea: PropTypes.number.isRequired,
  deleteGeoArea: PropTypes.func.isRequired,
  confirmationDelete: PropTypes.bool.isRequired,
  askDeleteConfirmation: PropTypes.func.isRequired,
  cancelDeleteGeoArea: PropTypes.func.isRequired,
  geoAreas: PropTypes.array,
};

GeoArea.defaultProps = {
  geoAreas: PropTypes.array,
};

export default GeoArea;
