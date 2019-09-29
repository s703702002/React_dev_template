import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const mapStateToProps = state => {
  return {
    todos: state.todos,
    counter: state.counter,
    co: state.co
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatch,
    ...ownProps
  };
};

const Todo = ({ todos, counter, dispatch, co }) => {
  return (
    <div>
      <h4>redux todo?</h4>
      <p>{todos[0]}</p>
      <p>count: {counter}</p>
      <p>co {co}</p>
      <button
        type="button"
        onClick={() => {
          dispatch({
            type: "INCREMENT"
          });
          dispatch({
            type: "INCREMENT2"
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
          dispatch({
            type: "DECREMENT2"
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
  co: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);
