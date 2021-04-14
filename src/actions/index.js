export const GET_COMMUNES = 'GET_COMMUNES';
export const SAVE_COMMUNES = 'SAVE_COMMUNES';
export const SWITCH_DISPLAY = 'SWITCH_DISPLAY';
export const EDIT_ZONE_NAME = 'EDIT_ZONE_NAME';
export const UPDATE_ZONE_NAME_VALUE = 'UPDATE_ZONE_NAME_VALUE';

export const getCommunes = () => ({
  type: GET_COMMUNES,
});

export const saveCommunes = (res) => ({
  type: SAVE_COMMUNES,
  communes: res.data,
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
