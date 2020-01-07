import React, { useState, useEffect, memo } from 'react'
import { getRoomsThunk, createRoomThunk, getStatusThunk } from '../../../Thunks'
import { connect } from 'react-redux';
import './FormRooms.css'

let form = {
  floor: "",
  beds: "",
  roomId: "",
  balcony: false
}
const FormRooms = ({ createRoom, getRooms, getStatus, formData }) => {
  const [newRoom, setNewRoom] = useState(form)
  useEffect(() => {
    setNewRoom({
      ...form,
      ...formData
    })
  }, [formData])


  const handleInputChange = (event) => {
    const { target: { name, value, checked } } = event;
    setNewRoom({
      ...newRoom,
      [name]: name === 'balcony' ? checked : value
    })
  }

  const handleSubmit = () => {
    createRoom(newRoom)
    setTimeout(()=>{getRooms()
    getStatus()},0);
    setNewRoom({ ...form })
  }

  return (
    <div className='form'>
      <div>
        <h3>Add New Room</h3>
        <label>
          <span>Floor</span>
          <input type="number" onChange={handleInputChange} value={newRoom.floor} name='floor' id="floor"></input>
        </label>
        <label>
          <span>Beds</span>
          <input type="number" onChange={handleInputChange} value={newRoom.beds} name='beds' id="beds"></input>
        </label>
        <label>
          <span>Balcony</span>
          <input onChange={handleInputChange} value={newRoom.balcony} checked={newRoom.balcony ? true : false} name='balcony' type="checkbox" id="balcony"></input>
        </label>
        <label>
          <span>Room Number</span>
          <input type="number" onChange={handleInputChange} value={newRoom.roomId} name='roomId' id="roomId"></input>
        </label>
      </div>
      <div>
        <button className="formButton" onClick={handleSubmit}>{newRoom.id ? "Update" : "Create"}</button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  const { rooms: { roomsData } } = state;
  return {
    roomsData,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    createRoom: (data) => {
      dispatch(createRoomThunk(data))
    },
    getRooms: () => {
      dispatch(getRoomsThunk())
    },
    getStatus: () => {
      dispatch(getStatusThunk())
    }

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(memo(FormRooms));
