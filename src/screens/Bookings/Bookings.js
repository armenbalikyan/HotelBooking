import React, { useState } from 'react'
import FormBookings from '../../Components/Inputs/FormBookings/FormBookings'
import './bookings.styles.css'
import {connect} from 'react-redux'
import TableBookings from '../../Components/Info/TableBookings/TableBookings'
import {removeBookingThunk} from '../../Thunks'


const Bookings = ({removeBooking}) => {
    const [formData, setForm] = useState({})


    const handleRemoveBooking = (id) => {
        removeBooking(id)
    }

    const handleEditBooking = (data) => {
        setForm(data)
    }
    return (
        <div className="bookings">
            <aside className='asideRoom'>
                <FormBookings formData={formData} />
            </aside>
            <main className='mainTable'> 
                <TableBookings
                    remove={(id) => handleRemoveBooking(id)}
                    edit={(data) => handleEditBooking(data)}
                />
            </main>
        </div>
    )
}
const mapStateToProps = (state) => {
    const { bookings } = state
    return {
        bookings
    }
  }
const mapDispatchToProps = (dispatch) => {
    return {
      removeBooking:(id)=>{
        dispatch(removeBookingThunk(id))
      },
    }
  }
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Bookings);