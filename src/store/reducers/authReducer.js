import * as actionTypes from "../actions/actionTypes";

const initialState = {
  isRegistered: false,
  isLogin: false,
  token: null,
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    //using the fallthrough case techniques
    case actionTypes.CREATE_USER_START:
    case actionTypes.LOGOUT_START:
      return {
        ...state,
        loading: true
      };
    case actionTypes.CREATE_USER_FAIL:
    case actionTypes.LOGOUT_FAIL:
      return {
        ...state,
        loading: false
      };
    case actionTypes.CREATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isRegistered: true
      };

    case actionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        isLogin: false,
        token: null,
        loading: false,
        isRegistered: false
      };
    default:
      return state;
  }
};

export default reducer;
