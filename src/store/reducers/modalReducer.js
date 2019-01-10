import * as actionTypes from "../actions/actionTypes";
const initialState = {
  showModal: false,
  type: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_MODAL:
      return {
        ...state,
        type: action.payload,
        showModal: !state.showModal
      };

    default:
      return state;
  }
};

export default reducer;
