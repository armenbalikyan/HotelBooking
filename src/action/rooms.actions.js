export const getStatusRequest = () => ({
    type: 'GET_STATUS_REQUEST'
  })
  export const getStatusSuccsess = (data) => ({
    type: 'GET_STATUS_SUCCSESS',
    payload: data
  })
  export const getStatusFailure = () => ({
    type: 'GET_STATUS_FAILURE'
  })


  export const getRoomsRequest = () => ({
    type: 'GET_ROOMS_REQUEST'
  })
  export const getRoomsSuccsess = (data) => ({
    type: 'GET_ROOMS_SUCCSESS',
    payload: data
  })
  export const getRoomsFailure = () => ({
    type: 'GET_ROOMS_FAILURE'
  })


  export const createRoomsSuccsess = (data) => ({
    type: 'CREATE_ROOM_SUCCSESS',
    payload: data
  })
  export const createRoomsFailure = () => ({
    type: 'CREATE_ROOM_FAILURE'
  })

  export const editRoomsSuccsess = (data) => ({
    type: 'EDIT_ROOM_SUCCSESS',
    payload: data
  })
  export const editRoomsFailure = () => ({
    type: 'Edit_ROOM_FAILURE'
  })


  export const removeRoomSuccsess = (id) => ({
    type: 'REMOVE_ROOM_SUCCSESS',
    payload: id
  })
  export const removeRoomFailure = () => ({
    type: 'REMOVE_ROOM_FAILURE'
  })

  