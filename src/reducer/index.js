import {
  SAVE_COMMUNES_TO_COMPLETE,
  SWITCH_DISPLAY,
  EDIT_ZONE_NAME,
  UPDATE_ZONE_NAME_VALUE,
  CHANGE_AUTOCOMPLETE_INPUT_VALUE,
  HIDE_AUTOCOMPLETE_CREA,
  ADD_COMMUNE_CREA,
  REMOVE_COMMUNE_CREA,
  SAVE_PICTURES,
} from '../actions/index';

const initialState = {
  myGeoAreas: {
    count: 0,
    display: true,
  },
  createGeoArea: {
    display: false,
    zoneNameValue: '[Nom de la zone]',
    nameIsInEditMode: false,
    autocompleteInputValue: '',
    communesToComplete: [],
    displayAutocomplete: true,
    communesSelected: [],
    disabledInput: false,
    pictures: [],
  },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SWITCH_DISPLAY:
      return {
        ...state,
        myGeoAreas: {
          ...state.myGeoAreas,
          display: !state.myGeoAreas.display,
        },
        createGeoArea: {
          ...state.createGeoArea,
          display: !state.createGeoArea.display,
        },
      };
    case SAVE_COMMUNES_TO_COMPLETE:
      return {
        ...state,
        createGeoArea: {
          ...state.createGeoArea,
          communesToComplete: action.communes,
        },
      };
    case EDIT_ZONE_NAME:
      return {
        ...state,
        createGeoArea: {
          ...state.createGeoArea,
          nameIsInEditMode: !state.createGeoArea.nameIsInEditMode,
        },
      };
    case UPDATE_ZONE_NAME_VALUE:
      return {
        ...state,
        createGeoArea: {
          ...state.createGeoArea,
          zoneNameValue: action.value,
        },
      };
    case CHANGE_AUTOCOMPLETE_INPUT_VALUE:
      return {
        ...state,
        createGeoArea: {
          ...state.createGeoArea,
          displayAutocomplete: true,
          autocompleteInputValue: action.value,
        },
      };
    case HIDE_AUTOCOMPLETE_CREA:
      return {
        ...state,
        createGeoArea: {
          ...state.createGeoArea,
          autocompleteInputValue: '',
          displayAutocomplete: !state.createGeoArea.displayAutocomplete,
        },
      };
    case ADD_COMMUNE_CREA: {
      const newCommunesSelected = state.createGeoArea.communesSelected;
      let disabledInput = false;
      newCommunesSelected.push(action.value);
      if (newCommunesSelected.length === 3) {
        disabledInput = true;
      }
      return {
        ...state,
        createGeoArea: {
          ...state.createGeoArea,
          communesSelected: newCommunesSelected,
          disabledInput,
        },
      };
    }
    case REMOVE_COMMUNE_CREA: {
      const newCommunes = state.createGeoArea.communesSelected;
      const indexToRemove = newCommunes.findIndex((element) => element === action.commune);
      newCommunes.splice(indexToRemove, 1);

      const oldPictures = state.createGeoArea.pictures;
      const picturesToRemove = [];
      oldPictures.forEach((element) => {
        if (element.commune === action.commune) {
          picturesToRemove.push(element);
        }
      });
      const picIndexsToRemove = [];
      oldPictures.forEach((oldPic) => {
        picturesToRemove.forEach((picToRemove) => {
          if (oldPic === picToRemove) {
            picIndexsToRemove.push(oldPictures.indexOf(picToRemove));
          }
        });
      });
      picIndexsToRemove.reverse();
      picIndexsToRemove.forEach((index) => {
        oldPictures.splice(index, 1);
      });
      const newPictures = [];
      oldPictures.forEach((pic) => {
        newPictures.push(pic);
      });
      return {
        ...state,
        createGeoArea: {
          ...state.createGeoArea,
          communesSelected: newCommunes,
          disabledInput: false,
          pictures: newPictures,
        },
      };
    }
    case SAVE_PICTURES: {
      const oldPictures = state.createGeoArea.pictures;
      const newPictures = action.pictures;
      const pictures = [];
      if (oldPictures !== undefined) {
        oldPictures.forEach((pic) => {
          pictures.push(pic);
        });
      }
      newPictures.forEach((pic) => {
        pictures.push(pic);
      });

      return {
        ...state,
        createGeoArea: {
          ...state.createGeoArea,
          pictures,
        },
      };
    }
    default:
      return { ...state };
  }
};

export default reducer;

/* pictures: [
  {
    src: 'https://picsum.photos/id/695/150',
    commune: 'Ézy-sur-Eure',
  },
  {
    src: 'https://picsum.photos/id/695/151',
    commune: 'Ézy-sur-Eure',
  },
  {
    src: 'https://picsum.photos/id/695/152',
    commune: 'Ézy-sur-Eure',
  },
  {
    src: 'https://picsum.photos/id/695/153',
    commune: 'Ézy-sur-Eure',
  },
  {
    src: 'https://picsum.photos/id/695/154',
    commune: 'Ézy-sur-Eure',
  },
  {
    src: 'https://picsum.photos/id/695/154',
    commune: 'Ézy-sur-Eure',
  },
], */
