import { INCREMENT, DECREMENT } from "../acyion_types";
export const createIn = (value) => ({ type: INCREMENT, data: value });
export const createDe = (value) => ({ type: DECREMENT, data: value });
export const createInA = (value, delay) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(createIn(value));
    }, delay);
  };
};
