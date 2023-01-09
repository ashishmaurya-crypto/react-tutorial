import changeTheNumber from "./upDown";
import changeName from "./addName";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    changeTheNumber: changeTheNumber,
    changeName: changeName,
})

export default rootReducer