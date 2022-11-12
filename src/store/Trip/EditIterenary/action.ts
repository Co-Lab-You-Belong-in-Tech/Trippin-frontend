import axios from "axios";
import * as actions from "./actionType";
import * as tripConfig from "../../../config";
import { Dispatch } from "redux";
import { dispatchType } from "../../interfcaeTypes/dispatchInt";
import authHeader from "../../../utils/headerWithAuthConfig";

// interface addTrip {
//     location_name: string,

// }

export const addTripPlan = (location_name:string, itinerary_start_time:string,itinerary_end_time:string,description:string ,ratings:string, number_of_reviews:string ,location_type:string) => async(dispatch: Dispatch<dispatchType>) => {
   try {
    dispatch({
        loading: true,
        type: actions.EDIT_ITERENARY_START
    })
        let userLocaInfo = JSON.parse(localStorage.getItem('userInfo') || "");
        let newTripInf = JSON.parse(localStorage.getItem('newtrip') || "");

        
        
        const config = {
            headers : {
                "Content-Type" : "application/json",
                'X-Requested-With': 'XMLHttpRequest',
                'X-CSRF-TOKEN' : document.querySelector('meta[name="csrf-token"]')?.getAttribute('content'),
                'Authorization': `Bearer ${userLocaInfo?.token}`
            }
        }

         await axios.post(`${tripConfig.BASE_URL}/trips/${newTripInf?.data.id}/itineraries`, {location_name, itinerary_start_time, itinerary_end_time,description, ratings,number_of_reviews,location_type}, config)
        .then((result) => {
            dispatch({ 
                loading: false,
                type: actions.EDIT_ITERENARY,
                payload: {location_name, itinerary_start_time, itinerary_end_time,description, ratings,number_of_reviews,location_type}
            })
        })
        
        

    //    localStorage.setItem('itPlan', JSON.stringify(data));
        

       

   } catch (error) {
    dispatch({
        loading: false,
        type: actions.EDIT_ITERENARY_FAILED,
        payload: error
    })
   }

}