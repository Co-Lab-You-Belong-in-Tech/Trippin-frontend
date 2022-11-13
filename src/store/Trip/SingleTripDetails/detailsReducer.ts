import * as actions from './actionType';

interface intiState{
    loading: boolean,
    tripDetsInfo: any,
    error: any
}

const initialState:intiState = {
    loading: false,
    tripDetsInfo: "",
    error: ""
}

interface actionInt{
    type: string,
    payload: any
}

export const tripDetsReducer = (state=initialState, action:actionInt) => {
    switch (action.type) {
        case actions.SINGLE_TRIP_DETAILS_START:
            return{
                ...state,
                loading: true
            } 
        case actions.SINGLE_TRIP_DETAILS:
            return{
                ...state,
                loading: false,
                tripDetsInfo: action.payload
            }
        case actions.SINGLE_TRIP_DETAILS_FAILED:
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}