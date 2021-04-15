import { connect } from 'react-redux';
import CommunesPictures from '../../components/CommunesPictures';

const mapStateToProps = (state) => ({
  pictures: state.createGeoArea.pictures,
  autocompleteInputValue: state.createGeoArea.autocompleteInputValue,
});

export default connect(mapStateToProps)(CommunesPictures);
