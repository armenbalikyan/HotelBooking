import React,{useEffect, memo} from 'react'
import { getStatusThunk } from '../../../Thunks'
import { connect } from 'react-redux';
import './CountInfo.css'
const CountInfo =({ getStatus, status,gettingStatus })=>{
      
  useEffect(() => {
    const getData = async () => { await getStatus() }
    getData() 
  }, []);
    return(
        <div className='allInfo'>
        {!status ?"Something went wrong !!!": Object.keys(status).map((e, i) =>
          <div className="detail" key={i}>
            <span>{status[e]}</span>
            <span>{e}</span>
          </div>)}
      </div>
    )
}

const mapStateToProps = (state) => {
    const { rooms: { status, gettingStatus } } = state;
    return {
      status,
      gettingStatus
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      getStatus: () => {
        dispatch(getStatusThunk())
      }
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(memo(CountInfo));