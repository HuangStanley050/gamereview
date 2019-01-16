import React, { Component } from "react";
import { connect } from "react-redux";
import { fetch_reviews } from "../../store/actions/fetchActions";

class Reviews extends Component {
  componentDidMount() {
    this.props.get_reviews();
  }
  render() {
    return <h1>Review Component</h1>;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    get_reviews: () => dispatch(fetch_reviews())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Reviews);
