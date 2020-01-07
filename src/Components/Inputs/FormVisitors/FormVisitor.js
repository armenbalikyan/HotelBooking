import React,{useState,memo,useEffect} from 'react';
import {getVisitorsThunk,createVisitorThunk} from '../../../Thunks'
import {connect} from 'react-redux';
import './FormVisitor.css'

let person = {
    personName: "",
    personId: "",
    cardNumber: "",
    createdDate: "",
}
const FormVisitors = ({getVisitors,createVisitor,formData}) => {
    const [newVisitor,setNewVisitor]= useState(person)
    useEffect(() => {
        setNewVisitor({...person,
          ...formData})
    }, [formData])


    const handleSubmit=()=>{
        createVisitor(newVisitor)
        setTimeout(()=>getVisitors(),0)
        setNewVisitor(person)
    }
    const handleInputChange = (event) => {
        const { target: { name, value } } = event;
        setNewVisitor({
            ...newVisitor,
            [name]:value
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
                    <input onChange={handleInputChange} value={newVisitor.cardNumber}  name='cardNumber' id="cardNumber"></input>
                </label>
                <label>
                    <span>Date</span>
                    <input type="date" onChange={handleInputChange} value={newVisitor.createdDate} name='createdDate' id="createdDate"></input>
                </label>
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
      },
      getVisitors:()=>{
        dispatch(getVisitorsThunk())
      }
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(memo(FormVisitors));