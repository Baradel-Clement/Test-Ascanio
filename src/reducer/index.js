import { SAVE_COMMUNES, SWITCH_DISPLAY, EDIT_ZONE_NAME, UPDATE_ZONE_NAME_VALUE } from '../actions/index';

const initialState = {
  communesData: [{}],
  myGeoAreas: {
    count: 0,
    display: true,
  },
  createGeoArea: {
    display: false,
    zoneNameValue: '[Nom de la zone]',
    nameIsInEditMode: false,
  }
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
    case SAVE_COMMUNES:
      return {
        ...state,
        communesData: action.communes,
      };
    case EDIT_ZONE_NAME:
      return {
        ...state,
        createGeoArea: {
          ...state.createGeoArea,
          nameIsInEditMode: !state.createGeoArea.nameIsInEditMode
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
    default:
      return { ...state };
  }
};

export default reducer;
