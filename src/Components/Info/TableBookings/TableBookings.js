import React, { memo, useEffect} from 'react'
import { connect } from 'react-redux'
import { getBookingsThunk} from '../../../Thunks'
import moment from 'moment'
//import Spinner from '../../Spinner/Spinner';
import './TableBookings.styles.css'
import Spinner from '../../Spinner/Spinner'

const TableBookings = (props) => {
  useEffect(() => {
    const getData = async () => {await props.getBookings()}
    getData()
  }, []) 

  return (
    <div className="tableRooms">
      {props.gettingBookings ?<Spinner/> :props.bookingsData.length === 0 ? <h2>No Data</h2> :
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Person Name</th>
            <th>Person ID</th>
            <th>Date</th>
            <th>Room Number</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            props.bookingsData && props.bookingsData.map((e, i) => {
              return <tr key={e.id}>
                <td>{++i}</td>
                <td>{e.personName}</td>
                <td>{e.personId}</td>
                <td>{moment(e.bookedAt).format("DD/MM/YYYY")}</td>
                <td>{e.roomNumber}</td>
                <td><button onClick={()=>{props.edit(e)}}>Edit</button></td>
                <td><button onClick={()=>{props.remove(e.id)}}>Delete</button></td>
              </tr>
            })}

        </tbody>
      </table>}
    </div>
  )
}

const mapStateToProps = (state) => {
  const {bookings} = state
  const { bookingsData, gettingBookings } = bookings;
  return {
    bookingsData,
    gettingBookings
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBookings: () => {
      dispatch(getBookingsThunk())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(memo(TableBookings));