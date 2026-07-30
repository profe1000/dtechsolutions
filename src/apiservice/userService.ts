import instance from "../utils/axios.wrapper";

// Bookings
export const userGetPaymentDetails = async (body?: any) => {
  const axios = await instance("", "https://dummyjson.com/", true);
  const { data } = await axios.get("/todos");
  const result = await data;
  return result;
};

export const userAddBooking = async (bookingData: any) => {
  const axios = await instance(null, null, true);
  const { data } = await axios.post(`api/v1/user/bookings`, bookingData);
  const result = await data;
  return result;
};
