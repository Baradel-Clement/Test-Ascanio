import { connect } from 'react-redux';
import CommunesPictures from '../../components/CommunesPictures';
import { newOrderGallery } from '../../actions';

const mapStateToProps = (state, ownProps) => {
  switch (ownProps.context) {
    case 'CreateGeoArea':
      return {
        items: state.createGeoArea.pictures,
        geoAreas: state.myGeoAreas.geoAreas,
      };
    case 'GeoArea':
      return {
        items: state.myGeoAreas.geoAreas[ownProps.indexOfMyGeoArea].pictures,
        geoAreas: state.myGeoAreas.geoAreas,
      };
    default:
      return null;
  }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  setItems: (arrayMoveFunction) => {
    dispatch(newOrderGallery(arrayMoveFunction, ownProps.context, ownProps.indexOfMyGeoArea));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CommunesPictures);
