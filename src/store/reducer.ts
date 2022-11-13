import {combineReducers} from 'redux';
import authReducer from './Auth/auth.reducer';
import { registerUserReducer, userLoginReducer } from './Auth/user/reducer';
import { addTripPlanReducer } from './Trip/EditIterenary/reducer';
import { newTripReducer } from './Trip/NewTrip/reducer';
import tripCombReducers from './Trip/trip.reducer';




const rootReducer = combineReducers({
    authLogin: authReducer.userLogin,
    authRegister: authReducer.userRegister,
    createNewTripRed: tripCombReducers.createTrip,
    addTripPlanRed: addTripPlanReducer,
    tripPlanRed: tripCombReducers.tripPlanProf,
    tripDetailsRed: tripCombReducers.tripDetails,
});




export default rootReducer