const initialState = {
  gettingBookings: false,
  bookingsData: []
};

export default function bookingsReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_BOOKINGS_REQUEST':

      return {
        ...state,
        gettingBookings: true
      }
    case 'GET_BOOKINGS_SUCCSESS':
      return {
        ...state,
        gettingBookings: false,
        bookingsData: action.payload
      }

    case 'GET_BOOKINGS_FAILURE':

      return {
        ...state,
        gettingBookings: false
      }

      case "CREATE_BOOKING_SUCCSESS":
        return {
            ...state,
            bookingsData: [...state.bookingsData,action.payload]
        }
        case "CREATE_BOOKING_FAILURE":    
        return {
            ...state,
        }
       

        case "EDIT_BOOKING_SUCCSESS":
          const lastData = state.bookingsData.filter(elem => elem.id !== action.payload.id)
           return {
               ...state,
               editData: [...lastData,action.payload]
           }
           case "EDIT_ROOM_FAILURE":    
           return {
               ...state,
           }
   

    case 'REMOVE_BOOKING_SUCCSESS':
      const filtered = state.bookingsData.filter(elem => elem.id !== action.payload)
      return {
        ...state,
        bookingsData: [...filtered]
      }
    case "REMOVE_BOOKING_FAILURE":
      return {
        ...state,
      }
    default:
      return state
  }


}