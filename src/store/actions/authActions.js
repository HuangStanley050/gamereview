//import axios from "axios";
import fb from "../../config/firebase-config";
import * as actionTypes from "./actionTypes";
import { toggle_modal } from "./modalActions";

const auth = fb.auth();
const db = fb.firestore();

export const auth_create_user = (email, password) => {
  return dispatch => {
    dispatch({ type: actionTypes.CREATE_USER_START });
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        dispatch(toggle_modal());
        //dispatch({type:actionTypes.CREATE_USER_SUCCESS,payload:res.user.})
        dispatch({ type: actionTypes.CREATE_USER_SUCCESS });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: actionTypes.CREATE_USER_FAIL });
      });
  };
};

export const auth_logout = () => {
  return dispatch => {
    dispatch({ type: actionTypes.LOGOUT_START });
    auth
      .signOut()
      .then(res => {
        dispatch({ type: actionTypes.LOGOUT_SUCCESS });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: actionTypes.LOGOUT_FAIL });
      });
  };
};

export const auth_login = (email, password) => {
  return dispatch => {
    dispatch({ type: actionTypes.LOGIN_START });
    auth
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        //console.log(res.user);
        dispatch(toggle_modal());
        dispatch({ type: actionTypes.LOGIN_SUCCESS, payload: res.user.uid });
      })
      .catch(err => {
        dispatch({ type: actionTypes.LOGIN_FAIL });
        console.log(err);
      });
  };
};
