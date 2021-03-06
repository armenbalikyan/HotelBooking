import React, { useState, memo, useEffect } from 'react';
import {createVisitorThunk } from '../../../Thunks'
import { connect } from 'react-redux';
import './FormVisitor.css'

let person = {
    personName: "",
    personId: "",
    cardNumber: "",
    createdDate: "",
}
const FormVisitors = ({createVisitor, formData }) => {
    const [newVisitor, setNewVisitor] = useState(person)
    const [showError, setShowError] = useState("none");

    useEffect(() => {
        setNewVisitor({
            ...person,
            ...formData
        })
    }, [formData])


    const handleSubmit = async() => {
        if (newVisitor.personName && newVisitor.personId && newVisitor.cardNumber && newVisitor.createdDate) {
            await createVisitor(newVisitor)
            setNewVisitor(person)
            setShowError("none")
        } else {
            setShowError("block")
        }

    }
    const handleInputChange = (event) => {
        const { target: { name, value } } = event;
        setNewVisitor({
            ...newVisitor,
            [name]: value
        })
    }
    return (
        <div className='formVisitor'>
            <div>
                <h3>Add New Person</h3>
                <label>
                    <span>Person Name</span>
                    <input type="text" onChange={handleInputChange} value={newVisitor.personName} name='personName' id="personName"></input>
                </label>
                <label>
                    <span>Person ID</span>
                    <input type="text" onChange={handleInputChange} value={newVisitor.personId} name='personId' id="personId"></input>
                </label>
                <label>
                    <span>Card Number</span>
                    <input onChange={handleInputChange} value={newVisitor.cardNumber} name='cardNumber' id="cardNumber"></input>
                </label>
                <label>
                    <span>Date</span>
                    <input type="date" onChange={handleInputChange} value={newVisitor.createdDate} name='createdDate' id="createdDate"></input>
                </label>
            </div>

            <div id="myModal" style={{ display: `${showError}`, color: "red" }} class="modal">
                <div class="modal-content">
                    <span class="close"></span>
                    <h3>Please fill all fields...</h3>
                </div>
            </div>

            <div>
                <button onClick={handleSubmit} className="formButton" >{newVisitor.id ? "Update" : "Create"}</button>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    const { visitors: { visitorsData } } = state;
    return {
        visitorsData,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createVisitor: (data) => {
            dispatch(createVisitorThunk(data))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(memo(FormVisitors));