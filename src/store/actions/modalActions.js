import * as actionTypes from "./actionTypes";
export const toggle_modal = mType => {
  return {
    type: actionTypes.TOGGLE_MODAL,
    payload: mType
  };
};
