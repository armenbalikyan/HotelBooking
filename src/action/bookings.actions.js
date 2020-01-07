  
export const getBookingsRequest = () => ({
    type: 'GET_BOOKINGS_REQUEST'
  })
  
  export const getBookingsSuccsess = (data) => ({
    type: 'GET_BOOKINGS_SUCCSESS',
    payload: data
  })
  
  export const getBookingsFailure = () => ({
    type: 'GET_BOOKINGS_FAILURE'
  })
  


//CREATE BOOKING
  export const createBookingSuccsess = (data) => ({
    type: 'CREATE_BOOKING_SUCCSESS',
    payload: data
  })
  export const createBookingFailure = () => ({
    type: 'CREATE_BOOKING_FAILURE'
  })
 
  //Remove BOOKING
  export const removeBookingSuccsess = (id) => ({
    type: 'REMOVE_BOOKING_SUCCSESS',
    payload: id
  })
  export const removeBookingFailure = () => ({
    type: 'REMOVE_BOOKING_FAILURE'
  })


   //Edit BOOKING
   export const editBookingSuccsess = (data) => ({
    type: 'EDIT_BOOKING_SUCCSESS',
    payload: data
  })
  export const editBookingFailure = () => ({
    type: 'EDIT_BOOKING_FAILURE'
  })