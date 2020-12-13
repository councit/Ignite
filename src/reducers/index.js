//module imports
import { combineReducers } from "redux";
//reducer imports
import gamesReducer from "./gamesReducer";
import detailReducer from "./detailReducer";

//rootReducer is going to combine all reducers into a single object so we can pass a single reducer to the store
const rootReducer = combineReducers({
  games: gamesReducer,
  detail: detailReducer,
});

export default rootReducer;
