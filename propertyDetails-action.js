import { propertyDetailsActions } from "./propertyDetails-slice";
import { axiosInstance } from "../../utils/axios";
export const getPropertyDetails = (id) => async (dispatch, getState) => {
      if (!id) {
    console.error("getPropertyDetails called without id");
    dispatch(propertyDetailsActions.getErrors("Property ID missing"));
    return;
  }
    try {
        dispatch(propertyDetailsActions.getListRequest());
        const response = await axiosInstance(`/v1/rent/listing/${id}`);
        if (!response) {
            throw new Error("Could not fetch property details");
        }
        const { data } = response.data;
        dispatch(propertyDetailsActions.getPropertyDetails(data));
    } catch (error) {
        dispatch(propertyDetailsActions.getErrors(error.response.data.error));
    }
}