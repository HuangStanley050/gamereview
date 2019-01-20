import * as actionTypes from "./actionTypes";
import fb from "../../config/firebase-config";
import { toggle_modal } from "./modalActions";

const db = fb.firestore();

export const createReview = (title, content) => {
  return dispatch => {
    dispatch({ type: actionTypes.CREATE_REVIEW_START });
    db.collection("reviews")
      .add({ title, content })
      .then(res => {
        dispatch(toggle_modal());
        dispatch({ type: actionTypes.CREATE_REVIEW_SUCCESS });
      })
      .catch(err => {
        console.log(err.message);
        dispatch({ type: actionTypes.CREATE_REVIEW_FAIL });
      });
  };
};
