import * as actionTypes from "../actions/actionTypes";
const initialState = {
  showModal: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_MODAL:
      return {
        ...state,
        showModal: !state.showModal
      };
    default:
      return state;
  }
};

export default reducer;
