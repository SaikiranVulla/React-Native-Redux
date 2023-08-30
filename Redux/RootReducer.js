import { combineReducers } from "redux";
import UserReducer from "./User/UserReducer";
import ThemeReducer from "./Theme/ThemeReducer";

const rootReducer = combineReducers({
 UserReducer : UserReducer,
 ThemeReducer: ThemeReducer,
});

export default rootReducer;