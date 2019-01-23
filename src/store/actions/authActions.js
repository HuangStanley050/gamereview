//import axios from "axios";
import fb from "../../config/firebase-config";
import * as actionTypes from "./actionTypes";
import { toggle_modal } from "./modalActions";

const auth = fb.auth();
const db = fb.firestore();

export const auth_create_user = (email, password, bio) => {
  return dispatch => {
    dispatch({ type: actionTypes.CREATE_USER_START });
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        return db
          .collection("users")
          .doc(res.user.uid)
          .set({
            bio: bio
          });
      })
      .then(() => {
        dispatch(toggle_modal());

        dispatch({ type: actionTypes.CREATE_USER_SUCCESS });
        dispatch({ type: actionTypes.ERROR_CLEAR });
      })
      .catch(err => {
        console.log(err.message);
        dispatch({ type: actionTypes.ERROR, payload: err.message });
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
        console.log(err.message);
        dispatch({ type: actionTypes.ERROR, payload: err.message });
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
        dispatch(toggle_modal());
        let userInfo = db
          .collection("users")
          .doc(res.user.uid)
          .get();
        return Promise.all([userInfo, res]);
      })
      .then(([userInfo, res]) => {
        dispatch({ type: actionTypes.LOGIN_SUCCESS, payload: res.user.email });
        dispatch({
          type: actionTypes.LOGIN_EXTRA,
          payload: userInfo.data().bio
        });
        dispatch({ type: actionTypes.ERROR_CLEAR });
      })
      .catch(err => {
        dispatch({ type: actionTypes.LOGIN_FAIL });
        dispatch({ type: actionTypes.ERROR, payload: err.message });
        console.log(err.message);
      });
  };
};
