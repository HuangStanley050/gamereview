import React, { Component } from "react";
import { connect } from "react-redux";
import { fetch_reviews } from "../../store/actions/fetchActions";
//import { compose } from "redux";
//import { firestoreConnect } from "react-redux-firebase";
import "react-accessible-accordion/dist/fancy-example.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody
} from "react-accessible-accordion";

class Reviews extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.auth.isLogin !== prevProps.auth.isLogin) {
      console.log("current props: ", this.props.auth.isLogin);
      console.log("previoius props: ", prevProps.auth.isLogin);
      this.props.get_reviews();
    }
  }

  render() {
    let reviews = null;
    if (this.props.reviews.loading) {
      reviews = <h1 className="red-text center-align">Loading...</h1>;
    } else {
      reviews = this.props.reviews.reviews.map(review => {
        return (
          <Accordion key={review.id}>
            <AccordionItem>
              <AccordionItemTitle>
                <h4>{review.title}</h4>
              </AccordionItemTitle>
              <AccordionItemBody>
                <p>{review.content}</p>
              </AccordionItemBody>
            </AccordionItem>
          </Accordion>
        );
      });
    }

    return (
      <div className="container" style={{ marginTop: "40px" }}>
        {this.props.auth.isLogin ? (
          reviews
        ) : (
          <h1 className="center-align">You have not login</h1>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    get_reviews: () => dispatch(fetch_reviews())
  };
};

const mapStateToProps = state => {
  return {
    auth: state.auth,

    reviews: state.reviews
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reviews);
