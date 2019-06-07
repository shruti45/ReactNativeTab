import { combineReducers } from "redux";
import repos from "./repositories.reducer";
import library from "./library.reducer";

export default combineReducers({ repos, library });
