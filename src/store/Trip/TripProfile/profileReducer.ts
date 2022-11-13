import * as actions from './actionType';


const initialState = {
loading: false,
error: "",
allTrip: ""
}

interface actionInt{
    type: string,
    payload: any
}

export const tripProfileReducder = (state=initialState, action:actionInt) => {
    switch (action.type) {
        case actions.TRIP_PROFILE_START:
            return{
                ...state,
                loading: true,
            }
        case actions.TRIP_PROFILE:
            return{
                ...state,
                loading: false,
                allTrip: action.payload
            }
        case actions.TRIP_PROFILE_FAILED:
            return{
                ...state,
                laoding: false,
                error: action.payload
            }
        default:
            return state
    }
}