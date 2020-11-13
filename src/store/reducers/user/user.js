import {ActionType} from "../../action";
import {extend} from "../../../utils/utils";
import {AuthorizationStatus} from "../../../const";


const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  userInfo: {},
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload,
      });
    case ActionType.LOAD_USER:
      return extend(state, {
        userInfo: action.payload,
      });
  }
  return state;
};

export {user};
