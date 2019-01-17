import React, { Component } from "react";
import { connect } from "react-redux";
import { fetch_reviews } from "../../store/actions/fetchActions";
import "react-accessible-accordion/dist/fancy-example.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody
} from "react-accessible-accordion";

class Reviews extends Component {
  componentDidMount() {
    this.props.get_reviews();
  }
  render() {
    return (
      <div className="container" style={{ marginTop: "40px" }}>
        <Accordion>
          <AccordionItem>
            <AccordionItemTitle>
              <h3>Simple title</h3>
            </AccordionItemTitle>
            <AccordionItemBody>
              <p>Body content</p>
            </AccordionItemBody>
          </AccordionItem>
        </Accordion>
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
    reviews: state.review
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reviews);
