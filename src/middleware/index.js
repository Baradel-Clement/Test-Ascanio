/* eslint-disable no-console */
import axios from 'axios';

import {
  GET_COMMUNES_TO_AUTOCOMPLETE, saveCommunesToComplete,
} from '../actions';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case GET_COMMUNES_TO_AUTOCOMPLETE: {
      const inputValue = store.getState().createGeoArea.autocompleteInputValue;
      axios.get(
        `https://geo.api.gouv.fr/communes?nom=${inputValue}&fields=departement&boost=population&limit=5`,
      ).then((res) => {
        console.log(res.data);
        const communesToComplete = res.data;
        store.dispatch(saveCommunesToComplete(communesToComplete));
      });
      next(action);
      break;
    }
    default:
      next(action);
  }
};
