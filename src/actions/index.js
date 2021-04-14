export const SAVE_COMMUNES_TO_COMPLETE = 'SAVE_COMMUNES_TO_COMPLETE';
export const SWITCH_DISPLAY = 'SWITCH_DISPLAY';
export const EDIT_ZONE_NAME = 'EDIT_ZONE_NAME';
export const UPDATE_ZONE_NAME_VALUE = 'UPDATE_ZONE_NAME_VALUE';
export const GET_COMMUNES_TO_AUTOCOMPLETE = 'GET_COMMUNES_TO_AUTOCOMPLETE';
export const CHANGE_AUTOCOMPLETE_INPUT_VALUE = 'CHANGE_AUTOCOMPLETE_INPUT_VALUE';

export const saveCommunesToComplete = (communes) => ({
  type: SAVE_COMMUNES_TO_COMPLETE,
  communes,
});

export const switchDisplay = () => ({
  type: SWITCH_DISPLAY,
});

export const editZoneName = () => ({
  type: EDIT_ZONE_NAME,
});

export const updateZoneNameValue = (value) => ({
  type: UPDATE_ZONE_NAME_VALUE,
  value,
});

export const changeAutocompleteInputValue = (value) => ({
  type: CHANGE_AUTOCOMPLETE_INPUT_VALUE,
  value,
});

export const getCommunesToAutocomplete = (value) => ({
  type: GET_COMMUNES_TO_AUTOCOMPLETE,
  value,
});
