import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const mapStateToProps = state => {
  return {
    todo: state.todo
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatch,
    ...ownProps
  };
};

const Todo = ({ todo }) => {
  return (
    <div>
      <h4>redux todo?</h4>
      <p>{todo[0]}</p>
    </div>
  );
};

Todo.propTypes = {
  todo: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);
