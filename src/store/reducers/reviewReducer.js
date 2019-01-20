import * as actionTypes from "../actions/actionTypes";

const initialState = {
  reviews: [],
  loading: false,
  fetchAgain: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_START:
    case actionTypes.CREATE_REVIEW_START:
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
        reviews: [...action.payload],
        fetchAgain: false
      };

    case actionTypes.CREATE_REVIEW_FAIL:
    case actionTypes.CREATE_REVIEW_SUCCESS:
      return {
        ...state,
        loading: false,
        fetchAgain: true
      };
    default:
      return state;
  }
};

export default reducer;
