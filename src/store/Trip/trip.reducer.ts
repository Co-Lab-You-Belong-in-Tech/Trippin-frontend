import { addTripPlanReducer } from "./EditIterenary/reducer";
import { newTripReducer } from "./NewTrip/reducer";


const tripCombReducers = {
    createTrip: newTripReducer,
    addTripPlan: addTripPlanReducer
}

export default tripCombReducers