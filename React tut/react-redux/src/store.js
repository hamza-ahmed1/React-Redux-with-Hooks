import root_reducer from "./reducer";
import { createStore } from "redux";
export const store =createStore(root_reducer);