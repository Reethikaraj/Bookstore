import { combineReducers } from "redux";
import DataReducer from "./reducer-getdata";
import cartReducer from "./reducer-cart";
import themeReducer from "./reducer-theme";

const rootReducer = combineReducers({ DataReducer, cartReducer, themeReducer });
export type rootState = ReturnType<typeof rootReducer>;
export default rootReducer;
