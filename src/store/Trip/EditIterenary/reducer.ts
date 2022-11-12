import * as actions from  './actionType';


interface tripPlantInt{
    location_name: string,
    itinerary_start_time: string, 
    itinerary_end_time: string,
    description: string, 
    ratings: string,
    number_of_reviews: string,
    location_type: string,
}
type initType = {tripPlan:{}[], loading:boolean, error:any}

const initialState:initType= {
    tripPlan: [],
    loading: false,
    error: ""
}

interface actionInt{
    type: string,
    payload: any
}

export const addTripPlanReducer = (state=initialState, action:actionInt) => {
    switch (action.type) {
        case actions.EDIT_ITERENARY_START:
            return{
                ...state,
                loading: true
            }
        case actions.EDIT_ITERENARY:
            console.log('from reducer',state.tripPlan);
            let tripPlanSaved = [...state.tripPlan, action.payload]
            localStorage.setItem('tripPlanSaved',JSON.stringify(tripPlanSaved))
            return{
                ...state,
                loading:false,
                tripPlan: tripPlanSaved
            }
          
        case actions.EDIT_ITERENARY_FAILED:
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}