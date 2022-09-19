import Counter from "../components/counter";
import { connect } from "react-redux";
import { createIn, createDe, createInA } from "../redux/actions/count_action";

export default connect(
  (state) => ({ count: state.count, person: state.person }),
  {
    increment: createIn,
    incrementAsync: createInA,
    decrement: createDe,
  }
)(Counter);
