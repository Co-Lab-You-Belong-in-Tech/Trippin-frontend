import {combineReducers} from 'redux';
import { registerUserReducer, userLoginReducer } from './Auth/user/reducer';
import { newTripReducer } from './Trip/NewTrip/reducer';




const rootReducer = combineReducers({
    authLogin: userLoginReducer,
    authRegister: registerUserReducer,
    createNewTripRed: newTripReducer
});




export default rootReducer