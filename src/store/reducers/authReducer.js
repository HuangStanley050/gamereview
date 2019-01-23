import * as actionTypes from "../actions/actionTypes";

const initialState = {
  isRegistered: false,
  isLogin: false,
  accountInfo: {
    email: ""
  },
  token: null,
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    //using the fallthrough case techniques
    case actionTypes.CREATE_USER_START:
    case actionTypes.LOGOUT_START:
    case actionTypes.LOGIN_START:
    case actionTypes.CREATE_ADMIN_START:
      return {
        ...state,
        loading: true
      };
    case actionTypes.LOGIN_FAIL:
    case actionTypes.CREATE_USER_FAIL:
    case actionTypes.LOGOUT_FAIL:
      return {
        ...state,
        loading: false
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isLogin: true,
        accountInfo: { ...state.accountInfo, email: action.payload }
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
        isRegistered: false,
        accountInfo: { ...state.accountInfo, email: "" }
      };
    case actionTypes.LOGIN_EXTRA:
      return {
        ...state,
        accountInfo: { ...state.accountInfo, bio: action.payload }
      };
    default:
      return state;
  }
};

export default reducer;
