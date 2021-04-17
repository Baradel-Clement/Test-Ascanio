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
export const ASK_DELETE_CONFIRMATION = 'ASK_DELETE_CONFIRMATION';
export const CANCEL_DELETE_GEO_AREA = 'CANCEL_DELETE_GEO_AREA';
export const SAVE_GEO_AREAS_STORAGED = 'SAVE_GEO_AREAS_STORAGED';

export const saveCommunesToComplete = (communes, context, indexOfMyGeoArea) => ({
  type: SAVE_COMMUNES_TO_COMPLETE,
  communes,
  context,
  indexOfMyGeoArea,
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

export const changeAutocompleteInputValue = (value, context, indexOfMyGeoArea) => ({
  type: CHANGE_AUTOCOMPLETE_INPUT_VALUE,
  value,
  context,
  indexOfMyGeoArea,
});

export const getCommunesToAutocomplete = (value, context, indexOfMyGeoArea) => ({
  type: GET_COMMUNES_TO_AUTOCOMPLETE,
  value,
  context,
  indexOfMyGeoArea,
});

export const hideAutocompleteCrea = (context, indexOfMyGeoArea) => ({
  type: HIDE_AUTOCOMPLETE_CREA,
  context,
  indexOfMyGeoArea,
});

export const addCommuneCrea = (value, context, indexOfMyGeoArea) => ({
  type: ADD_COMMUNE_CREA,
  value,
  context,
  indexOfMyGeoArea,
});

export const removeCommuneCrea = (commune, context, indexOfMyGeoArea) => ({
  type: REMOVE_COMMUNE_CREA,
  commune,
  context,
  indexOfMyGeoArea,
});

export const getPictures = (commune, context, indexOfMyGeoArea) => ({
  type: GET_PICTURES,
  commune,
  context,
  indexOfMyGeoArea,
});

export const savePictures = (pictures, context, indexOfMyGeoArea) => ({
  type: SAVE_PICTURES,
  pictures,
  context,
  indexOfMyGeoArea,
});

export const newOrderGallery = (gallery, context, indexOfMyGeoArea) => ({
  type: NEW_ORDER_GALLERY,
  gallery,
  context,
  indexOfMyGeoArea,
});

export const saveGeoArea = () => ({
  type: SAVE_GEO_AREA,
});

export const deleteGeoArea = (indexOfMyGeoArea) => ({
  type: DELETE_GEO_AREA,
  indexOfMyGeoArea,
});

export const askDeleteConfirmation = (indexOfMyGeoArea) => ({
  type: ASK_DELETE_CONFIRMATION,
  indexOfMyGeoArea,
});

export const cancelDeleteGeoArea = (indexOfMyGeoArea) => ({
  type: CANCEL_DELETE_GEO_AREA,
  indexOfMyGeoArea,
});

export const saveGeoAreasStoraged = (geoAreasStorage) => ({
  type: SAVE_GEO_AREAS_STORAGED,
  geoAreasStorage,
});
