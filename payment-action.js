import { paymentActions } from "./payment-slice";
import { axiosInstance } from "../../utils/axios";
export const initialCheckoutSession = (paymentData) => async (dispatch) => {
    try {
        dispatch(paymentActions.getCheckoutRequests());
        const response = await axiosInstance.post(`/v1/rent/user/booking/create-order`, paymentData);
        if (!response) throw new Error("Could not initiate checkout session");
        dispatch(paymentActions.getCheckoutSuccess(response.data));
        } catch (error) {
        dispatch(paymentActions.getError(error.response?.data?.message || error.message));
    }
};
export const verifyPayment = (verifyData) => async (dispatch) => {
    try {
        dispatch(paymentActions.getVerifyRequest());
        const response = await axiosInstance.post(`/v1/rent/user/booking/verify-payment`, verifyData);
        if (!response) throw new Error("Could not verify payment");
        dispatch(paymentActions.getVerifySuccess(response.data));
    } catch (error) {
        dispatch(paymentActions.getError(error.response?.data?.message || error.message));
    }
};