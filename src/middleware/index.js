import axios from 'axios';

import {
  GET_COMMUNES,
  saveCommunes,
} from '../actions';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case GET_COMMUNES: {
      axios.get(
        'https://geo.api.gouv.fr/communes',
      ).then((res) => {
        store.dispatch(saveCommunes(res));
      });
      next(action);
      break;
    }
    default:
      next(action);
  }
};
