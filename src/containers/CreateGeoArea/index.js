import { connect } from 'react-redux';

import CreateGeoArea from '../../components/CreateGeoArea';
import { switchDisplay, saveGeoArea } from '../../actions';

const mapStateToProps = (state) => ({
  saveButtonDisabled: state.createGeoArea.saveButtonDisabled,
});

const mapDispatchToProps = (dispatch) => ({
  switchDisplay: () => {
    dispatch(switchDisplay());
  },
  saveGeoArea: () => {
    dispatch(saveGeoArea());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateGeoArea);
