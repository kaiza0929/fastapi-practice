import { createStore, combineReducers } from "redux";
import { todoReducer } from "./../reducers/todo";

const rootReducer = combineReducers({todoReducer: todoReducer});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);