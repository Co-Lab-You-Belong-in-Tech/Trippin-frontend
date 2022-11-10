import * as actions from './actionType';
import { toast } from 'react-toastify';


const initialState = {

}

interface actionInt{
    type: string,
    payload: any
}
export const userLoginReducer = (state = initialState, action: actionInt) => {

    switch (action.type) {
        case actions.LOGIN_USER_START:
            return {loading: true}
        case actions.LOGIN_USER:
            return {
                loading: false,
                userInfo: action.payload
            }
        case actions.LOGIN_USER_FAILED:
            if(action.payload.message === "These credentials do not match our records."){
                 toast.error("Invalid Email or Password")  
            }
            return {
                loading: false,
                error: action.payload
            }
        case actions.LOGOUT_USER:
            state = {
                ...state
            }
            return state
    
        default:
            return state
    }
}

export const registerUserReducer = (state = initialState, action: actionInt) => {
    switch (action.type) {
        case actions.REGISTER_USER_START:
            return{
                loading: true,
            }
        case actions.REGISTER_USER:
            return{
                laoding: false,
                userInfo: action.payload
            }
        case actions.REGISTER_USER_FAILED:
            if(action.payload.message === "The email has already been taken."){
                toast.error("The email has already been taken.")
            }
            if(action.payload.message === "The password must be at least 5 characters."){
                toast.error("The password must be at least 5 characters.")
            }
            return {
                loading: false,
                error: action.payload
            }
    
        default:
            return state;
    }
}