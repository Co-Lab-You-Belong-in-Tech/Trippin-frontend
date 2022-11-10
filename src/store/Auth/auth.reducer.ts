import {combineReducers} from "redux";
import { registerUserReducer, userLoginReducer } from "./user/reducer";

 const authReducer = {
    userLogin: userLoginReducer,
    userRegister: registerUserReducer
};

export default authReducer