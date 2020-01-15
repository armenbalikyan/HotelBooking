import React,{useState} from 'react';
import { connect } from 'react-redux';
import {getStatusThunk, removeRoomThunk,getRoomsThunk} from '../../Thunks'
import './rooms.styles.css'
import CountInfo from '../../Components/Info/CountInfo/CountInfo'
import FormRooms from '../../Components/Inputs/FormRooms/FormRooms';
import TableRooms from '../../Components/Info/TableRooms/TableRooms';


const  Rooms = ({removeRoom,getRooms,getStatus})=> {
const [formData,setForm]= useState({})


const handleRemoveRoom=(id)=>{
   removeRoom(id)
}

const handleEditRoom=(data)=>{
  setForm(data)
}

    return (
    <div className="rooms">
      <aside className="asideRoom">
      <CountInfo/>
      <FormRooms formData={formData}/>
      </aside>  
      <main className="mainTable">
      <TableRooms
       remove={(id)=>handleRemoveRoom(id)}
       edit={(data)=>handleEditRoom(data)}
      />
      </main>
    </div>
      )
  }

const mapStateToProps = (state) => {
  const { rooms } = state
  return {
    rooms
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getStatus: () => {
        dispatch(getStatusThunk())
    },
    removeRoom:(id)=>{
      dispatch(removeRoomThunk(id))
    },
    getRooms: () => {
      dispatch(getRoomsThunk())
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Rooms);