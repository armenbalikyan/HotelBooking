import api from '../API';
import { getBookingsRequest, getBookingsSuccsess, getBookingsFailure, createBookingSuccsess, editBookingSuccsess, removeBookingFailure, removeBookingSuccsess } from '../action';

export const getBookingsThunk = () => async (dispatch) => {
  try {
    dispatch(getBookingsRequest());
    const response = await api.bookings.get();
    if (response.status !== 200) {
      throw new Error('Cannot get Bookings')
    }
    dispatch(getBookingsSuccsess(response.data));
  } catch (error) {
    dispatch(getBookingsFailure());
  }
}

export const createBookingThunk = (data) => async (dispatch) => {
  try {
    if (data.id) {
      const response = await api.deleteUpdateBooking(data.id).put({ ...data })
      if (response.statusText !== "OK") {
        throw new Error('Cannot update Booking')
      }
      dispatch(editBookingSuccsess(response.data))
    } else {
      const response = await api.bookings.post({
        ...data
      });
      dispatch(createBookingSuccsess(response.data))
      if (response.statusText !== "OK") {
        throw new Error('Cannot create Visitor')
      }
    }
  } catch (error) {
    throw new Error(error)
  }
}

export const removeBookingThunk = (id) => async (dispatch) => {
  try {
    await api.deleteUpdateBooking(id).delete();
    dispatch(removeBookingSuccsess(id))
  } catch (error) {
    dispatch(removeBookingFailure());
  }
}