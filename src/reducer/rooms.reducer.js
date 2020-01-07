const initialState = {
    gettingStatus:false,
    status:{
        rooms:0,
        bookings:0,
        visitors:0
    },
    gettingRooms: false,
    roomsData: [],
}

export default function roomsReducer(state = initialState, action) {
switch (action.type) {
    case "GET_STATUS_REQUEST":    
        return {
            ...state,
            gettingStatus:true
        }
        case "GET_STATUS_SUCCSESS":    
        return {
            ...state,
            gettingStatus:false,
            status:action.payload
  
        }
        case "GET_STATUS_FAILURE":    
        return {
            ...state,
            gettingStatus:false,
            status:action.payload
        }

        ///ROOMS get
        case "GET_ROOMS_REQUEST":    
        return {
            ...state,
            gettingRooms:true
        }
        case "GET_ROOMS_SUCCSESS":    
        return {
            ...state,
            gettingRooms:false,
            roomsData:action.payload
        }
        case "GET_ROOMS_FAILURE":    
        return {
            ...state,
            gettingRooms:false,
        }

        //REMOVE Rooms
        case "REMOVE_ROOM_SUCCSESS":
        const filtered = state.roomsData.filter(elem => elem.id !== action.payload)
        return {
            ...state,
            roomsData: [...filtered]
        }
        case "REMOVE_ROOM_FAILURE":    
        return {
            ...state,
        }


        //Create Rooms
        case "CREATE_ROOM_SUCCSESS":
        return {
            ...state,
            roomsData: [...state.roomsData,action.payload]
        }
        case "CREATE_ROOM_FAILURE":    
        return {
            ...state,
        }


        //Edit Rooms
        case "EDIT_ROOM_SUCCSESS":
       const lastData = state.roomsData.filter(elem => elem.id !== action.payload.id)
        return {
            ...state,
            roomsData: [...lastData,action.payload]
        }
        case "EDIT_ROOM_FAILURE":    
        return {
            ...state,
        }

    default:
        return state
}
}




