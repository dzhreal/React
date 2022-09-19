import Counter from "../components/counter";
import { connect } from "react-redux";
import { createIn, createDe ,createInA} from "../redux/action_creators";

export default connect((state) => ({ count: state }), {
  increment: createIn,
  incrementAsync: createInA,
  decrement: createDe,
})(Counter);
