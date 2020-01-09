import React, { memo, useEffect } from 'react'
import { connect } from 'react-redux'
import { getRoomsThunk, getStatusThunk } from '../../../Thunks'
import Spinner from '../../Spinner/Spinner';
import './TableRooms.css'

const TableRooms = (props) => {
  useEffect(() => {
    const getData = async () => { await props.getRooms() }
    getData()
  }, [])

  return (
    <div className="tableRooms">
      {props.gettingRooms ? <Spinner /> : props.roomsData.length == 0 ? <h2>No Data</h2> :
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Booked</th>
              <th>Floor</th>
              <th>Beds</th>
              <th>Balcony</th>
              <th>Number</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              props.roomsData && props.roomsData.map((e, i) => {
                return <tr key={e.id}>
                  <td>{++i}</td>
                  <td>{e.bookedAt}</td>
                  <td>{e.floor}</td>
                  <td>{e.beds}</td>
                  <td>{e.balcony ? "Yes" : "No"}</td>
                  <td>{e.roomId}</td>
                  <td><button onClick={() => { props.edit(e) }}>Edit</button></td>
                  <td><button onClick={() => { props.remove(e.id) }}>Delete</button></td>
                </tr>
              })}

          </tbody>
        </table>}
    </div>
  )
}

const mapStateToProps = (state) => {
  const { rooms } = state
  const { roomsData, gettingRooms } = rooms;
  return {
    roomsData,
    gettingRooms
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getRooms: () => {
      dispatch(getRoomsThunk())
    },
    getStatus: () => {
      dispatch(getStatusThunk())
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(memo(TableRooms));