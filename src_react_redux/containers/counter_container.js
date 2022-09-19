import Counter from "../components/counter";
import { connect } from "react-redux";
import { createIn, createDe } from "../redux/action_creators";

// function mapStateToProps(state){
//     return {count:state}
// }

// let mapStateToProps = (state) => ({ count: state });

// function mapDispatchToProps(dispatch){
//     return {
//         increment:(value) => {
//             dispatch(createIn(value))
//         },
//         decrement:(value) => {
//             dispatch(createDe(value))

//         }
//     }
// }

// let mapDispatchToProps = (dispatch) => {
//   return {
//     increment: (value) => {
//       dispatch(createIn(value));
//     },
//     decrement: (value) => {
//       dispatch(createDe(value));
//     },
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

export default connect((state) => ({ count: state }), {
  increment: createIn,
  decrement: createDe,
})(Counter);
