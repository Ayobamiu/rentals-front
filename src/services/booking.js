import axios from "axios";

export const checkListingAvailability = async (booking) => {
  try {
    const response = await axios.post(
      "http://localhost:3003/bookings/check-availability",
      booking
    );
    return response.data.isAvailable;
  } catch (error) {
    return error;
  }
};

export const addBooking = async (booking) => {
  try {
    const response = await axios.post(
      "http://localhost:3003/bookings",
      booking
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
