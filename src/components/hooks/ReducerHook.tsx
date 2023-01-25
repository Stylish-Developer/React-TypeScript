import React, { useReducer } from "react";

// --> This component tells how to write useReducer hook in with typescript
type CounterProp = {
  count: number;
};

type UpdateCounterProp = {
  type: "increment" | "decrement";
  payload: number;
};

type ResetCounterProp = {
  type: "reset";
};

type ActionProp = UpdateCounterProp | ResetCounterProp; // --> union method

// --> initial state
const initialState = {
  count: 0,
};

// --> reducer
const reducer = (state: CounterProp, action: ActionProp) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count + action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const ReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h4>concept of writing reducer hook in typescript</h4>
      <h2>count {state.count}</h2>
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        increment + 10
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
        increment - 10
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
};

export default ReducerHook;
