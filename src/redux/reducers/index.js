import couReducer from "./Coureducer";
import PerReducer from "./Perreducer";

import { combineReducers } from "redux";

export default combineReducers({
    count:couReducer,
    person:PerReducer
})
