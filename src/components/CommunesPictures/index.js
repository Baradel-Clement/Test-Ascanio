import React, { useEffect } from 'react';
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
  items, setItems, context, geoAreas,
}) => {
  useEffect(() => {
    if (context === 'GeoArea') {
      localStorage.setItem('geoAreas', JSON.stringify(geoAreas));
    }
  });
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
  context: PropTypes.string.isRequired,
  geoAreas: PropTypes.array,
};

CommunesPictures.defaultProps = {
  items: PropTypes.array,
  geoAreas: PropTypes.array,
};

export default CommunesPictures;
