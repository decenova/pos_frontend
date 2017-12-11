import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import {reducer as formReducer} from "redux-form";
import session from "./session";
import drinkList from "./drinkList";
import foodList from "./foodList";
import tableList from "./tableList";
import tableDetail from "./tableDetail";
import orderDetail from "./orderDetail";
import orderList from "./orderList";
import dailyConsuming from "./dailyConsuming";

const rootReducer = combineReducers({
  session,
  drinkList,
  foodList,
  tableList,
  tableDetail,
  orderDetail,
  orderList,
  dailyConsuming,
  routing: routerReducer,
  form: formReducer,
});

export default rootReducer;
