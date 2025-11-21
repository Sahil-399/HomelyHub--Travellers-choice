import { accomodationActions } from "./Accomodation-slice";
import { axiosInstance } from "../../utils/axios";
export const fetchAccomodations = () => async (dispatch) => {
    try {
        const response = await axiosInstance.get("/v1/rent/accomodation/newAccomodation",accomodationDate);
        if(!response){
            throw new Error("Could not fetch accomodations");
        }
    } catch (error) {
        dispatch(accomodationActions.getErrors(error.response.data.message))}
    }
    export const getAllAccomodation=()=>async(dispatch)=>{
        try {
            dispatch(accomodationActions.getAccomodationRequests());
            const{data}=await axiosInstance.get('/v1/rent/accomodation/myAccomodation');
            const accom=data.data;
            dispatch(accomodationActions.getAccomodation(accom));
        }catch (error) {
            dispatch(accomodationActions.getErrors(error.response.data.message));
        }
    };