import{INCREMENT,DECREMENT} from '../acyion_types'
let initState = 0;
export default function operaCount(preState = initState, action) {
  console.log("reducer-------", action);
  const { type, data } = action;
  let newState
  switch (type) {
    case INCREMENT:
      newState = preState + data;
      console.log(newState);
      return newState;
    case DECREMENT:
      newState = preState - data;
      console.log(newState);
      return newState;
    default:
      return preState;
  }
}
