import {
  SAVE_COMMUNES_TO_COMPLETE,
  SWITCH_DISPLAY,
  EDIT_ZONE_NAME,
  UPDATE_ZONE_NAME_VALUE,
  CHANGE_AUTOCOMPLETE_INPUT_VALUE,
  HIDE_AUTOCOMPLETE_CREA,
  ADD_COMMUNE_CREA,
  REMOVE_COMMUNE_CREA,
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
      return {
        ...state,
        createGeoArea: {
          ...state.createGeoArea,
          communesSelected: newCommunes,
        },
      };
    }
    default:
      return { ...state };
  }
};

export default reducer;
