import axios from "axios";
import * as actions from "./actionType";
import * as tripConfig from "../../../config";
import { Dispatch } from "redux";
import { dispatchType } from "../../interfcaeTypes/dispatchInt";
import authHeader from "../../../utils/headerWithAuthConfig";
// import { config } from "../../../utils/headerConfig";



export const newTripAction = (trip_name:string, trip_destination:string, trip_start_date:string, trip_end_date:string) => async(dispatch: Dispatch<dispatchType>) =>{
    try {
        let userLocaInfo = JSON.parse(localStorage.getItem('userInfo') || "")
        
        dispatch({
            loading:true,
            type: actions.NEW_TRIP_START
        })
        // const config = {
        //     headers : {
        //         "Content-Type" : "application/json",
        //         'X-Requested-With': 'XMLHttpRequest',
        //         'X-CSRF-TOKEN' : document.querySelector('meta[name="csrf-token"]')?.getAttribute('content'),
        //         'Authorization': `Bearer ${userLocaInfo?.token}`
        //     }
        // }
        const {data} = await axios.post(`${tripConfig.BASE_URL}${tripConfig.apiNewTrip}`, {trip_name, trip_destination, trip_start_date, trip_end_date}, authHeader(userLocaInfo));
        localStorage.setItem('newtrip', JSON.stringify(data))
        
        dispatch({
            loading: false,
            type: actions.NEW_TRIP,
            payload: data
        })
    } catch (error) {
        dispatch({
            loading: false,
            type: actions.NEW_TRIP_FAILED,
            payload: error
        })
    }
}