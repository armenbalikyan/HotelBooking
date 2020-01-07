import React, { memo, useEffect} from 'react'
import { connect } from 'react-redux'
import { getVisitorsThunk} from '../../../Thunks'
import moment from 'moment'
//import Spinner from '../../Spinner/Spinner';
import './TableVisitors.styles.css'

const TableVisitors = (props) => {
  useEffect(() => {
    const getData = async () => {await props.getVisitors()}
    getData()
  }, []) 

  return (
    <div className="tableRooms">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Person Name</th>
            <th>Person ID</th>
            <th>Date</th>
            <th>Card Number</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            props.visitorsData && props.visitorsData.map((e, i) => {
              return <tr key={e.id}>
                <td>{++i}</td>
                <td>{e.personName}</td>
                <td>{e.personId}</td>
                <td>{moment(e.createdDate).format("DD/MM/YYYY")}</td>
                <td>{e.cardNumber}</td>
                <td><button onClick={()=>{props.edit(e)}}>Edit</button></td>
                <td><button onClick={()=>{props.remove(e.id)}}>Delete</button></td>
              </tr>
            })}

        </tbody>
      </table>
    </div>
  )
}

const mapStateToProps = (state) => {
  const {visitors} = state
  const { visitorsData, gettingVisitors } = visitors;
  return {
    visitorsData,
    gettingVisitors
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getVisitors: () => {
      dispatch(getVisitorsThunk())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(memo(TableVisitors));