import { connect } from 'react-redux';
import CommunesSelected from '../../components/CommunesSelected';
import {
  removeCommuneCrea,
  hideAutocompleteCrea,
} from '../../actions';

const mapStateToProps = (state) => ({
  communesSelected: state.createGeoArea.communesSelected,
});

const mapDispatchToProps = (dispatch) => ({
  removeCommune: (commune) => {
    dispatch(removeCommuneCrea(commune));
    dispatch(hideAutocompleteCrea());
    dispatch(hideAutocompleteCrea());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CommunesSelected);
