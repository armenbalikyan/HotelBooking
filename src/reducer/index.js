import { combineReducers } from "redux";
import roomsReducer from './rooms.reducer';
import visitorsReducer from "./visitors.reducer";
import bookingsReducer from './booking.reducers'

export default combineReducers({
    rooms:roomsReducer,
    visitors:visitorsReducer,
    bookings:bookingsReducer
})