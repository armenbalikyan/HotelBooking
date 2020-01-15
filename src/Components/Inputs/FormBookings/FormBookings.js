import React, { useState, memo, useEffect } from 'react';
import {createBookingThunk, getVisitorsThunk, getRoomsThunk } from '../../../Thunks'
import { connect } from 'react-redux';
import './FormBookings.css'

let booking = {
    personId: "",
    personName: "",
    roomId: "",
    roomNumber: "",
    bookedAt: "",
}
const FormBookings = ({createBooking, formData, getVisitors, getRooms, visitorsData, roomsData }) => {
    const [newBooking, setNewBooking] = useState(booking)
    const [showError,setShowError] = useState("none")
    useEffect(() => {
        getVisitors()
        getRooms()
    }, [])


    useEffect(() => {
        setNewBooking({
            ...booking,
            ...formData
        })
    }, [formData])

    const handleSubmit = async() => {
        if(newBooking.personName && newBooking.roomId && newBooking.bookedAt){
            await createBooking(newBooking)
            setNewBooking(booking)
            setShowError("none")
        }else{
            setShowError("block")
        }
        
    }
    const handleInputChange = (event, data) => {
        const { target: { name, value } } = event;
        if (name === "personId") {
            let person = visitorsData.find(p => p.personId === value).personName
            setNewBooking({
                ...newBooking,
                [name]: value,
                "personName": person
            })
        }
        else if (name === "roomId") {
            let room = roomsData.find(r => r.id === value).roomId
            setNewBooking({
                ...newBooking,
                [name]: value,
                "roomNumber": room
            })
        }
        else {
            setNewBooking({
                ...newBooking,
                [name]: value,
            })
        }
    }
    return (
        <div className='formBookings'>
            <div>
                <h3>New Booking</h3>
                <label>
                    <span>Person Name</span>
                    <select name='personId' value={newBooking.personId} onChange={(data) => handleInputChange(data)} >
                        <option hidden defaultValue>Select</option>
                        {visitorsData.map((i) => {
                            return <option value={i.personId} data={i} key={i.id}>{i.personName}</option>
                        })}
                    </select>
                </label>
                <label>
                    <span>Person ID</span>
                    <input disabled type="text" onChange={handleInputChange} value={newBooking.personId} name='personId' id="personId"></input>
                </label>
                <label>
                    <span>Room Number</span>
                    <select name='roomId' value={newBooking.roomId} onChange={handleInputChange}>
                        <option hidden defaultValue>Select</option>
                        {roomsData.map((i) => {
                            return <option value={i.id} key={i.id}>Room:{i.roomId} - Beds:{i.beds} - Floor:{i.floor} - Balcony:{i.balcony ? "Yes" : "No"}</option>
                        })}
                    </select>
                </label>
                <label>
                    <span>Date</span>
                    <input type="date" onChange={handleInputChange} value={newBooking.bookedAt} name='bookedAt' id="bookedAt"></input>
                </label>
            </div>

            <div id="myModal" style={{ display: `${showError}`, color: "red" }} className="modal">
                <div className="modal-content">
                    <span className="close"></span>
                    <h3>Please fill all fields...</h3>
                </div>
            </div>

            <div>
                <button onClick={handleSubmit} className="formButton" >{newBooking.id ? "Update" : "Create"}</button>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    const { bookings: { bookingsData } } = state;
    const { visitors: { visitorsData } } = state;
    const { rooms: { roomsData } } = state;
    return {
        bookingsData,
        visitorsData,
        roomsData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createBooking: (data) => {
            dispatch(createBookingThunk(data))
        },
        getVisitors: () => {
            dispatch(getVisitorsThunk())
        },
        getRooms: () => {
            dispatch(getRoomsThunk())
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(memo(FormBookings));