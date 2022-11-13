import { addTripPlanReducer } from "./EditIterenary/reducer";
import { newTripReducer } from "./NewTrip/reducer";
import { tripDetsReducer } from "./SingleTripDetails/detailsReducer";
import { tripProfileReducder } from "./TripProfile/profileReducer";


const tripCombReducers = {
    createTrip: newTripReducer,
    addTripPlan: addTripPlanReducer,
    tripPlanProf: tripProfileReducder,
    tripDetails: tripDetsReducer
}

export default tripCombReducers