import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const mapStateToProps = state => {
  return {
    todos: state.todos,
    counter: state.counter
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatch,
    ...ownProps
  };
};

const Todo = ({ todos, counter, dispatch }) => {
  return (
    <div>
      <h4>redux todo?</h4>
      <p>{todos[0]}</p>
      <p>count: {counter}</p>
      <button
        type="button"
        onClick={() => {
          dispatch({
            type: "INCREMENT"
          });
        }}
      >
        + count
      </button>
      <button
        type="button"
        onClick={() => {
          dispatch({
            type: "DECREMENT"
          });
        }}
      >
        - count
      </button>
    </div>
  );
};

Todo.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.string).isRequired,
  counter: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);
