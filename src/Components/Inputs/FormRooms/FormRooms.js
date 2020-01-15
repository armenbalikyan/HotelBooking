import React, { useState, useEffect, memo } from 'react'
import {createRoomThunk} from '../../../Thunks'
import { connect } from 'react-redux';
import './FormRooms.css'

let form = {
  floor: "",
  beds: "",
  roomId: "",
  balcony: false
}
const FormRooms = ({ createRoom,formData }) => {
  const [newRoom, setNewRoom] = useState(form)
  const [showError, setShowError] = useState("none");

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

  const handleSubmit = async() => {
    if (newRoom.beds && newRoom.floor && newRoom.roomId) {
      await createRoom(newRoom)
      setNewRoom({ ...form })
      setShowError("none")
    }else{
      setShowError("block")
    }

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

      <div id="myModal" style={{display:`${showError}`,color:"red"}} className="modal">
        <div className="modal-content">
          <span className="close"></span>
          <h3>Please fill all fields...</h3>
        </div>
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
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(memo(FormRooms));
