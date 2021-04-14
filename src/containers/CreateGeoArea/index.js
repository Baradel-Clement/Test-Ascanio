import { connect } from 'react-redux';

import CreateGeoArea from '../../components/CreateGeoArea';
import { switchDisplay } from '../../actions';

const mapDispatchToProps = (dispatch) => ({
  switchDisplay: () => {
    dispatch(switchDisplay());
  },
});

export default connect(null, mapDispatchToProps)(CreateGeoArea);
