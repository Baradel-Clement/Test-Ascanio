/* eslint-disable max-len */
/* eslint-disable array-callback-return */
/* eslint-disable no-mixed-operators */
import axios from 'axios';

import {
  GET_COMMUNES_TO_AUTOCOMPLETE, saveCommunesToComplete, GET_PICTURES, savePictures,
} from '../actions';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case GET_COMMUNES_TO_AUTOCOMPLETE: {
      let inputValue = store.getState().createGeoArea.autocompleteInputValue;
      if (action.context === 'GeoArea') {
        inputValue = store.getState().myGeoAreas.geoAreas[action.indexOfMyGeoArea].autocompleteInputValue;
      }
      axios.get(
        `https://geo.api.gouv.fr/communes?nom=${inputValue}&fields=departement&boost=population&limit=5`,
      ).then((res) => {
        const communesToComplete = res.data;
        store.dispatch(saveCommunesToComplete(communesToComplete, action.context, action.indexOfMyGeoArea));
      });
      next(action);
      break;
    }
    case GET_PICTURES: {
      const { commune } = action;
      const randomNum = Math.round(Math.random() * (199 - 0) + 1);
      axios.get(
        `https://picsum.photos/v2/list?page=${randomNum}&limit=5`,
      ).then((res) => {
        const newPicturesArray = [];
        res.data.map((pic) => {
          let indexToRemove = 9;
          if (pic.download_url.charAt(pic.download_url.length - 5) !== '/') {
            indexToRemove = 8;
          }
          let newPicUrl = pic.download_url.slice(0, -indexToRemove);
          newPicUrl += '120';
          newPicturesArray.push({
            src: newPicUrl,
            commune,
            id: pic.id,
            width: 1,
            height: 1,
          });
        });
        store.dispatch(savePictures(newPicturesArray, action.context, action.indexOfMyGeoArea));
      });
      next(action);
      break;
    }
    default:
      next(action);
  }
};
