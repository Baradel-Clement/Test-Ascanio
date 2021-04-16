import { connect } from 'react-redux';
import CommunesPictures from '../../components/CommunesPictures';
import { newOrderGallery, saveGeoArea } from '../../actions';

const mapStateToProps = (state) => ({
  items: state.createGeoArea.pictures,
  autocompleteInputValue: state.createGeoArea.autocompleteInputValue,
  saveButtonDisabled: state.createGeoArea.saveButtonDisabled,
});

const mapDispatchToProps = (dispatch) => ({
  setItems: (arrayMoveFunction) => {
    dispatch(newOrderGallery(arrayMoveFunction));
  },
  saveGeoArea: () => {
    dispatch(saveGeoArea());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CommunesPictures);
