import { combineReducers } from "redux";

import { ExampleReducer } from "./ExampleReducer";

const RootReducer = combineReducers({
    myreducer: ExampleReducer
})

export default RootReducer