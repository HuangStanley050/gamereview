import * as actionTypes from "./actionTypes";
import fb from "../../config/firebase-config";

const db = fb.firestore();

export const createReview = (title, content) => {
  return dispatch => {
    dispatch({ type: actionTypes.CREATE_REVIEW_START });
    db.collection("reviews")
      .add({ title, content })
      .then(res => console.log(res))
      .catch(err => {
        console.log(err);
        dispatch({ type: actionTypes.CREATE_REVIEW_FAIL });
      });
  };
};
