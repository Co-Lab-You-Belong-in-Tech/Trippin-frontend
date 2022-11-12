import * as actions from  './actionType';

const initialState = {

}

interface actionInt{
    type: string,
    payload: any
}

export const addTripPlanReducer = (state=initialState, action:actionInt) => {
    switch (action.type) {
        case actions.EDIT_ITERENARY_START:
            return{loading: true}
        case actions.EDIT_ITERENARY:
            return{
                ...state,
                loading:false,
                tripPlan: action.payload
            }
          
        case actions.EDIT_ITERENARY_FAILED:
            return{
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}