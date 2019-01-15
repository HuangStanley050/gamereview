import * as actionTypes from "../actions/actionTypes";

const initialState = {
  token: null,
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_USER_START:
      return {
        ...state,
        loading: true
      };
    case actionTypes.CREATE_USER_FAIL:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};

export default reducer;
