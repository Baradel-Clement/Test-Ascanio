export const SAVE_COMMUNES_TO_COMPLETE = 'SAVE_COMMUNES_TO_COMPLETE';
export const SWITCH_DISPLAY = 'SWITCH_DISPLAY';
export const EDIT_ZONE_NAME = 'EDIT_ZONE_NAME';
export const UPDATE_ZONE_NAME_VALUE = 'UPDATE_ZONE_NAME_VALUE';
export const GET_COMMUNES_TO_AUTOCOMPLETE = 'GET_COMMUNES_TO_AUTOCOMPLETE';
export const CHANGE_AUTOCOMPLETE_INPUT_VALUE = 'CHANGE_AUTOCOMPLETE_INPUT_VALUE';
export const HIDE_AUTOCOMPLETE_CREA = 'HIDE_AUTOCOMPLETE_CREA';
export const ADD_COMMUNE_CREA = 'ADD_COMMUNE_CREA';
export const REMOVE_COMMUNE_CREA = 'REMOVE_COMMUNE_CREA';
export const GET_PICTURES = 'GET_PICTURES';
export const SAVE_PICTURES = 'SAVE_PICTURES';
export const NEW_ORDER_GALLERY = 'NEW_ORDER_GALLERY';
export const SAVE_GEO_AREA = 'SAVE_GEO_AREA';
export const DELETE_GEO_AREA = 'DELETE_GEO_AREA';

export const saveCommunesToComplete = (communes) => ({
  type: SAVE_COMMUNES_TO_COMPLETE,
  communes,
});

export const switchDisplay = () => ({
  type: SWITCH_DISPLAY,
});

export const editZoneName = (context, indexOfMyGeoArea) => ({
  type: EDIT_ZONE_NAME,
  context,
  indexOfMyGeoArea,
});

export const updateZoneNameValue = (value, context, indexOfMyGeoArea) => ({
  type: UPDATE_ZONE_NAME_VALUE,
  value,
  context,
  indexOfMyGeoArea,
});

export const changeAutocompleteInputValue = (value) => ({
  type: CHANGE_AUTOCOMPLETE_INPUT_VALUE,
  value,
});

export const getCommunesToAutocomplete = (value) => ({
  type: GET_COMMUNES_TO_AUTOCOMPLETE,
  value,
});

export const hideAutocompleteCrea = () => ({
  type: HIDE_AUTOCOMPLETE_CREA,
});

export const addCommuneCrea = (value) => ({
  type: ADD_COMMUNE_CREA,
  value,
});

export const removeCommuneCrea = (commune) => ({
  type: REMOVE_COMMUNE_CREA,
  commune,
});

export const getPictures = (commune) => ({
  type: GET_PICTURES,
  commune,
});

export const savePictures = (pictures) => ({
  type: SAVE_PICTURES,
  pictures,
});

export const newOrderGallery = (gallery) => ({
  type: NEW_ORDER_GALLERY,
  gallery,
});

export const saveGeoArea = () => ({
  type: SAVE_GEO_AREA,
});

export const deleteGeoArea = (indexOfMyGeoArea) => ({
  type: DELETE_GEO_AREA,
  indexOfMyGeoArea,
});
