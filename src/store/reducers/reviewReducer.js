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
    default:
      return state;
  }
};

export default reducer;
