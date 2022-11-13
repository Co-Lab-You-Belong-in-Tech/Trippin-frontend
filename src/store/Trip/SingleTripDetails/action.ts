import * as actions from './actionType'
import axios from "axios";
import * as tripConfig from '../../../config';
import { Dispatch } from "redux";
import { dispatchType } from "../../interfcaeTypes/dispatchInt";


export const singleTripDetailsAction = (id:string) => async(dispatch: Dispatch<dispatchType>) => {
    try {
        dispatch({
            loading: true,
            type: actions.SINGLE_TRIP_DETAILS_START
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
        const {data} = await axios.get(`${tripConfig.BASE_URL}/trips/${id}/itineraries`, config);
        console.log('fetshed', data);
        
        dispatch({
            loading: false,
            type: actions.SINGLE_TRIP_DETAILS,
            payload: data
        })
    } catch (error) {
        dispatch({
            loading: false,
            type: actions.SINGLE_TRIP_DETAILS_FAILED,
            payload: error
        })
    }
}