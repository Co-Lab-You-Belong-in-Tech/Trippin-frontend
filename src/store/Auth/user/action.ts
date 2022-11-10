import axios from "axios";
import * as actions from "./actionType";
import * as authConfig from "../../../config";
import { Dispatch } from "redux";
import { dispatchType } from "../../interfcaeTypes/dispatchInt";
import { config } from "../../../utils/headerConfig";



export const loginAction = (email: string, password: string) => async(dispatch: Dispatch<dispatchType>) => {
    try {
        dispatch({
            loading: true,
            type: actions.LOGIN_USER_START
        })
        const {data} = await axios.post(`${authConfig.BASE_URL}${authConfig.apiLoginUser}`, {email, password}, config);

        dispatch({
            loading: false,
            type: actions.LOGIN_USER,
            payload: data
        })
        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            loading: false,
            type: actions.LOGIN_USER_FAILED,
            payload: error
        })
    }
}

export const registerAction = (email: string, password: string) => async(dispatch: Dispatch<dispatchType>) => {
    try {
        dispatch({
            loading: true,
            type: actions.REGISTER_USER_START,
        })
   
        const {data} = await axios.post(`${authConfig.BASE_URL}${authConfig.apiSignupUser}`, {email, password}, config);

        dispatch({
            loading: false,
            type: actions.REGISTER_USER,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (error) {
        dispatch({
            loading: false,
            type: actions.REGISTER_USER_FAILED,
            payload: error
        })
    }
}

