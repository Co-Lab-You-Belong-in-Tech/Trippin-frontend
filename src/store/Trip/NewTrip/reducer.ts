import * as actions from './actionType';

const initialState = {
loading: false,
newTrip: ""
}

interface actionInt{
    type: string,
    payload: any
}

export const newTripReducer = (state=initialState, action:actionInt) => {
    switch (action.type) {
        case actions.NEW_TRIP_START:
            return{
                ...state,
                loading: true,
            }
        case actions.NEW_TRIP:
            return{
                ...state,
                loading: false,
                newTrip: action.payload
            }
        case actions.NEW_TRIP_FAILED:
            return{
                ...state,
                laoding: false,
                error: action.payload
            }
        default:
            return state
    }
}