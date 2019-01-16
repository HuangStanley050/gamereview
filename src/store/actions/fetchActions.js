import fb from "../../config/firebase-config";
import * as actionTypes from "./actionTypes";

const db = fb.firestore();

export const fetch_reviews = () => {
  return dispatch => {
    dispatch({ type: actionTypes.FETCH_START });
    db.collection("reviews")
      .get()
      .then(snapshot => {
        console.log(snapshot.docs);
      })
      .catch(err => console.log(err));
  };
};
