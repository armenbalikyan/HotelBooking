import api from '../API';
import {getStatusRequest,getStatusSuccsess,getStatusFailure,getRoomsRequest, getRoomsSuccsess, getRoomsFailure,createRoomsSuccsess,editRoomsSuccsess,removeRoomSuccsess,removeRoomFailure} from '../action';
import moment from 'moment'

export const getStatusThunk = () => async (dispatch) => {
    try {
      dispatch(getStatusRequest());
      const response = await api.roomsStatus.get();
      if (response.status !== 200) {
        throw new Error('Cannot get status')
      }
      dispatch(getStatusSuccsess(response.data.status));
    } catch (error) {
      dispatch(getStatusFailure());
    }
  }

  export const getRoomsThunk = () => async (dispatch) => {
    try {
      dispatch(getRoomsRequest());
      const response = await api.rooms.get();
      if (response.status !== 200) {
        throw new Error('Cannot get Rooms')
      }
      dispatch(getRoomsSuccsess(response.data));
    } catch (error) {
      dispatch(getRoomsFailure());
    }
  }

  export const createRoomThunk = (data) => async (dispatch) => {
    try {
      let date = new Date();
      if(data.id){
        const response = await api.deleteUpdateRoom(data.id).put({...data})
        if (response.statusText !== "OK") {
          throw new Error('Cannot update Room')
        }
        dispatch(editRoomsSuccsess(response.data))
      }else{
        const response = await api.rooms.post({
          bookedAt: moment(date).format('DD/MM/YYYY'),
          available: true,
          ...data
        }); 
        dispatch(createRoomsSuccsess(response.data))
        if (response.statusText !== "OK") {
          throw new Error('Cannot create Room')
        }
      }      
    } catch (error) {
      throw new Error(error)
    }
  }


  export const removeRoomThunk = (id) => async (dispatch) => {
    try {
      await api.deleteUpdateRoom(id).delete();
      dispatch(removeRoomSuccsess(id))     
    } catch (error) {
      dispatch(removeRoomFailure());
    }
  }

  