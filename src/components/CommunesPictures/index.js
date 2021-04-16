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
  items, setItems,
}) => {
  const onSortEnd = ({ oldIndex, newIndex }) => {
    setItems(arrayMove(items, oldIndex, newIndex));
  };

  return (
    <div className="communesPictures">
      <SortableGallery items={items} onSortEnd={onSortEnd} axis="xy" />
    </div>
  );
};

CommunesPictures.propTypes = {
  items: PropTypes.array,
  setItems: PropTypes.func.isRequired,
};

CommunesPictures.defaultProps = {
  items: PropTypes.array,
};

export default CommunesPictures;
