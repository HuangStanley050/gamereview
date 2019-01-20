import fb from "../../config/firebase-config";
import * as actionTypes from "./actionTypes";

const db = fb.firestore();

export const fetch_reviews = () => {
  return dispatch => {
    dispatch({ type: actionTypes.FETCH_START });
    db.collection("reviews")
      .get()
      .then(snapshot => {
        let review;
        let reviews = [];
        snapshot.forEach(snapshot => {
          //console.log(snapshot.id, " => ", snapshot.data());
          review = snapshot.data();
          review.id = snapshot.id;
          reviews.push(review);
        });
        //console.log(reviews);
        dispatch({ type: actionTypes.FETCH_SUCCESS, payload: reviews });
      })
      .catch(err => {
        console.log(err.message);
        dispatch({ type: actionTypes.FETCH_FAIL });
      });
  };
};
