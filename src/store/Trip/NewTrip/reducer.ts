import * as actions from './actionType';

const initialState = {

}

interface actionInt{
    type: string,
    payload: any
}

export const newTripReducer = (state=initialState, action:actionInt) => {
    switch (action.type) {
        case actions.NEW_TRIP_START:
            return{
                loading: true,
            }
        case actions.NEW_TRIP:
            return{
                loading: false,
                newTrip: action.payload
            }
        case actions.NEW_TRIP_FAILED:
            return{
                laoding: false,
                error: action.payload
            }
        default:
            return state
    }
}