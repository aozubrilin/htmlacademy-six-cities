import {combineReducers} from "redux";
import {data} from "./data/data";
import {app} from "./app/app";
import {user} from "./user/user";

export const NameSpace = {
  DATA: `data`,
  APP: `app`,
  USER: `user`,
};

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.APP]: app,
  [NameSpace.USER]: user,
});
