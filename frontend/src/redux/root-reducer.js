import { combineReducers } from "redux";
import consumablesReducers from "./reducer";

const rootReducer=combineReducers({
    data: consumablesReducers
});

export default rootReducer;