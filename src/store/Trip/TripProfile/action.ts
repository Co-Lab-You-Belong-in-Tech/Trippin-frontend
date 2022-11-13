import axios from "axios";
import * as actions from './actionType';
import * as tripConfig from "../../../config";
import { Dispatch } from "redux";
import { dispatchType } from "../../interfcaeTypes/dispatchInt";


export const tripProfileActions = () => async(dispatch: Dispatch<dispatchType>) => {
    try {
        dispatch({
            loading: true,
            type: actions.TRIP_PROFILE_START
        })
        let userLocaInfo = JSON.parse(localStorage.getItem('userInfo') || "")
        const config = {
            headers : {
                "Content-Type" : "application/json",
                'X-Requested-With': 'XMLHttpRequest',
                'X-CSRF-TOKEN' : document.querySelector('meta[name="csrf-token"]')?.getAttribute('content'),
                'Authorization': `Bearer ${userLocaInfo?.token}`
            }
        }

        const {data} = await axios.get(`${tripConfig.BASE_URL}${tripConfig.apiGetAllTrips}`, config)
        
        dispatch({
            loading: false,
            type: actions.TRIP_PROFILE,
            payload: data
        })
        
    } catch (error) {
        dispatch({
            loading: false,
            type: actions.TRIP_PROFILE_FAILED,
            payload: error
        })
    }
}