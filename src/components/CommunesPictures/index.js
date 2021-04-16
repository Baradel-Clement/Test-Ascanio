import React from 'react';
import PropTypes from 'prop-types';
import Gallery from 'react-photo-gallery';
import arrayMove from 'array-move';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import Photo from './Photo/index';

const SortablePhoto = SortableElement((item) => <Photo {...item} />);
const SortableGallery = SortableContainer(({ items }) => (
  <Gallery photos={items} renderImage={(props) => <SortablePhoto {...props} />} />
));

const CommunesPictures = ({
  items, setItems, saveButtonDisabled, saveGeoArea,
}) => {
  const onSortEnd = ({ oldIndex, newIndex }) => {
    setItems(arrayMove(items, oldIndex, newIndex));
  };

  return (
    <div className="communesPictures">
      <SortableGallery items={items} onSortEnd={onSortEnd} axis="xy" />
      <div className="saveButton-wrap">
        <button
          onClick={() => {
            saveGeoArea();
          }}
          disabled={(saveButtonDisabled) ? 'disabled' : ''}
          type="button"
          className={saveButtonDisabled ? 'saveButton disabled' : 'saveButton'}
        >Sauvegardez la zone
        </button>
      </div>
    </div>
  );
};

CommunesPictures.propTypes = {
  items: PropTypes.array,
  setItems: PropTypes.func.isRequired,
  saveGeoArea: PropTypes.func.isRequired,
  saveButtonDisabled: PropTypes.bool.isRequired,
};

CommunesPictures.defaultProps = {
  items: PropTypes.array,
};

export default CommunesPictures;
