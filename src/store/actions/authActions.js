//import axios from "axios";
import fb from "../../config/firebase-config";
import * as actionTypes from "./actionTypes";

export const auth_create_user = (email, password) => {
  return dispatch => {
    const auth = fb.auth();
    const db = fb.firestore();
    dispatch({ type: actionTypes.CREATE_USER_START });
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(res => console.log(res))
      .catch(err => {
        console.log(err);
        dispatch({ type: actionTypes.CREATE_USER_FAIL });
      });
  };
};
