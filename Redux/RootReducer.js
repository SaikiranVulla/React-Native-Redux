import { combineReducers } from "redux";
import UserReducer from "./User/UserReducer";
import ThemeReducer from "./Theme/ThemeReducer";
import LanguageReducer from "./ChangeLanguage/LanguageReducer";

const rootReducer = combineReducers({
 UserReducer : UserReducer,
 ThemeReducer: ThemeReducer,
 LanguageReducer: LanguageReducer,
});

export default rootReducer;