import * as actionTypes from "../actions/actionTypes";

const initialState = {
  reviews: [],
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_START:
      return {
        ...state,
        loading: true
      };
    case actionTypes.FETCH_FAIL:
      return {
        ...state,
        loading: false
      };
    case actionTypes.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        reviews: [...action.payload]
      };
    default:
      return state;
  }
};

export default reducer;
