/* eslint-disable max-len */
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
  NEW_ORDER_GALLERY,
  SAVE_GEO_AREA,
  DELETE_GEO_AREA,
} from '../actions/index';

const initialState = {
  myGeoAreas: {
    count: 0,
    display: true,
    geoAreas: [],
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
    saveButtonDisabled: true,
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
      switch (action.context) {
        case 'CreateGeoArea':
          return {
            ...state,
            createGeoArea: {
              ...state.createGeoArea,
              communesToComplete: action.communes,
            },
          };
        case 'GeoArea': {
          const newState = { ...state };
          newState.myGeoAreas.geoAreas[action.indexOfMyGeoArea].communesToComplete = action.communes;
          return newState;
        }
        default:
          return { ...state };
      }

    case EDIT_ZONE_NAME: {
      switch (action.context) {
        case 'CreateGeoArea':
          return {
            ...state,
            createGeoArea: {
              ...state.createGeoArea,
              nameIsInEditMode: !state.createGeoArea.nameIsInEditMode,
            },
          };
        case 'GeoArea': {
          const newState = { ...state };
          newState.myGeoAreas.geoAreas[action.indexOfMyGeoArea].nameIsInEditMode = !state.myGeoAreas.geoAreas[action.indexOfMyGeoArea].nameIsInEditMode;
          return newState;
        }
        default:
          return null;
      }
    }
    case UPDATE_ZONE_NAME_VALUE: {
      switch (action.context) {
        case 'CreateGeoArea':
          return {
            ...state,
            createGeoArea: {
              ...state.createGeoArea,
              zoneNameValue: action.value,
            },
          };
        case 'GeoArea': {
          const newState = { ...state };
          newState.myGeoAreas.geoAreas[action.indexOfMyGeoArea].zoneNameValue = action.value;
          return newState;
        }
        default:
          return null;
      }
    }
    case CHANGE_AUTOCOMPLETE_INPUT_VALUE:
      switch (action.context) {
        case 'CreateGeoArea':
          return {
            ...state,
            createGeoArea: {
              ...state.createGeoArea,
              displayAutocomplete: true,
              autocompleteInputValue: action.value,
            },
          };
        case 'GeoArea': {
          const newState = { ...state };
          newState.myGeoAreas.geoAreas[action.indexOfMyGeoArea].displayAutocomplete = true;
          newState.myGeoAreas.geoAreas[action.indexOfMyGeoArea].autocompleteInputValue = action.value;
          return newState;
        }
        default:
          return { ...state };
      }
    case HIDE_AUTOCOMPLETE_CREA: {
      switch (action.context) {
        case 'CreateGeoArea':
          return {
            ...state,
            createGeoArea: {
              ...state.createGeoArea,
              autocompleteInputValue: '',
              displayAutocomplete: !state.createGeoArea.displayAutocomplete,
            },
          };
        case 'GeoArea': {
          const newState = { ...state };
          newState.myGeoAreas.geoAreas[action.indexOfMyGeoArea].autocompleteInputValue = '';
          newState.myGeoAreas.geoAreas[action.indexOfMyGeoArea].displayAutocomplete = !newState.myGeoAreas.geoAreas[action.indexOfMyGeoArea].displayAutocomplete;
          return newState;
        }
        default:
          return { ...state };
      }
    }
    case ADD_COMMUNE_CREA: {
      let oldCommunesSelected = state.createGeoArea.communesSelected;
      if (action.context === 'GeoArea') {
        oldCommunesSelected = state.myGeoAreas.geoAreas[action.indexOfMyGeoArea].communesSelected;
      }
      const newCommunesSelected = [];
      if (oldCommunesSelected.length !== 0) {
        oldCommunesSelected.forEach((element) => {
          newCommunesSelected.push(element);
        });
      }
      let disabledInput = false;
      newCommunesSelected.push(action.value);
      if (newCommunesSelected.length === 3) {
        disabledInput = true;
      }
      switch (action.context) {
        case 'CreateGeoArea':
          return {
            ...state,
            createGeoArea: {
              ...state.createGeoArea,
              communesSelected: newCommunesSelected,
              disabledInput,
              saveButtonDisabled: false,
            },
          };
        case 'GeoArea': {
          const newState = { ...state };
          newState.myGeoAreas.geoAreas[action.indexOfMyGeoArea].communesSelected = newCommunesSelected;
          newState.myGeoAreas.geoAreas[action.indexOfMyGeoArea].disabledInput = disabledInput;
          newState.myGeoAreas.geoAreas[action.indexOfMyGeoArea].saveButtonDisabled = false;
          return newState;
        }
        default:
          return { ...state };
      }
    }
    case REMOVE_COMMUNE_CREA: {
      let oldCommunes = state.createGeoArea.communesSelected;
      const newCommunes = [];
      if (action.context === 'GeoArea') {
        oldCommunes = state.myGeoAreas.geoAreas[action.indexOfMyGeoArea].communesSelected;
      }

      if (oldCommunes.length !== 0) {
        oldCommunes.forEach((element) => {
          newCommunes.push(element);
        });
      }
      const indexToRemove = newCommunes.findIndex((element) => element === action.commune);
      newCommunes.splice(indexToRemove, 1);

      let oldPictures = state.createGeoArea.pictures;
      if (action.context === 'GeoArea') {
        oldPictures = state.myGeoAreas.geoAreas[action.indexOfMyGeoArea].pictures;
      }
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
      let isSaveButtonDisabled = false;
      if (newPictures.length === 0) {
        isSaveButtonDisabled = true;
      }
      switch (action.context) {
        case 'CreateGeoArea':
          return {
            ...state,
            createGeoArea: {
              ...state.createGeoArea,
              communesSelected: newCommunes,
              disabledInput: false,
              pictures: newPictures,
              saveButtonDisabled: isSaveButtonDisabled,
            },
          };
        case 'GeoArea': {
          const newState = { ...state };
          newState.myGeoAreas.geoAreas[action.indexOfMyGeoArea].communesSelected = newCommunes;
          newState.myGeoAreas.geoAreas[action.indexOfMyGeoArea].disabledInput = false;
          newState.myGeoAreas.geoAreas[action.indexOfMyGeoArea].pictures = newPictures;
          newState.myGeoAreas.geoAreas[action.indexOfMyGeoArea].saveButtonDisabled = isSaveButtonDisabled;
          return newState;
        }
        default:
          return { ...state };
      }
    }
    case SAVE_PICTURES: {
      let oldPictures = state.createGeoArea.pictures;
      if (action.context === 'GeoArea') {
        oldPictures = state.myGeoAreas.geoAreas[action.indexOfMyGeoArea].pictures;
      }
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

      switch (action.context) {
        case 'CreateGeoArea':
          return {
            ...state,
            createGeoArea: {
              ...state.createGeoArea,
              pictures,
            },
          };
        case 'GeoArea': {
          const newState = { ...state };
          newState.myGeoAreas.geoAreas[action.indexOfMyGeoArea].pictures = pictures;
          return newState;
        }
        default:
          return { ...state };
      }
    }
    case NEW_ORDER_GALLERY: {
      switch (action.context) {
        case 'CreateGeoArea':
          return {
            ...state,
            createGeoArea: {
              ...state.createGeoArea,
              pictures: action.gallery,
            },
          };
        case 'GeoArea': {
          const newState = { ...state };
          newState.myGeoAreas.geoAreas[action.indexOfMyGeoArea].pictures = action.gallery;
          return newState;
        }
        default:
          return { ...state };
      }
    }
    case SAVE_GEO_AREA: {
      const myOldGeoAreas = state.myGeoAreas.geoAreas;
      const myNewGeoAreas = [];

      if (myOldGeoAreas.length !== 0) {
        myOldGeoAreas.forEach((element) => {
          myNewGeoAreas.push(element);
        });
      }
      const addNewGeoArea = {
        zoneNameValue: state.createGeoArea.zoneNameValue,
        nameIsInEditMode: false,
        autocompleteInputValue: '',
        displayAutocomplete: true,
        disabledInput: state.createGeoArea.disabledInput,
        saveButtonDisabled: true,
        communesToComplete: [],
        communesSelected: state.createGeoArea.communesSelected,
        pictures: state.createGeoArea.pictures,
      };
      myNewGeoAreas.push(addNewGeoArea);

      return {
        ...state,
        myGeoAreas: {
          ...state.myGeoAreas,
          count: state.myGeoAreas.count + 1,
          display: true,
          geoAreas: myNewGeoAreas,
        },
        createGeoArea: {
          ...state.createGeoArea,
          display: false,
          zoneNameValue: '[Nom de la zone]',
          nameIsInEditMode: false,
          autocompleteInputValue: '',
          communesToComplete: [],
          displayAutocomplete: true,
          communesSelected: [],
          disabledInput: false,
          pictures: [],
          saveButtonDisabled: true,
        },
      };
    }
    case DELETE_GEO_AREA: {
      const oldGeoAreas = state.myGeoAreas.geoAreas;
      const newGeoAreas = [];
      oldGeoAreas.forEach((element) => {
        newGeoAreas.push(element);
      });
      newGeoAreas.splice(action.indexOfMyGeoArea, 1);
      return {
        ...state,
        myGeoAreas: {
          ...state.myGeoAreas,
          geoAreas: newGeoAreas,
        },
      };
    }
    default:
      return { ...state };
  }
};

export default reducer;
