import * as actionTypes from "../actions/actionTypes";
const initialState = {
  error: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ERROR:
      return {
        ...state,
        error: action.payload
      };
    case actionTypes.ERROR_CLEAR:
      return {
        ...state,
        error: ""
      };
    default:
      return state;
  }
};

export default reducer;
