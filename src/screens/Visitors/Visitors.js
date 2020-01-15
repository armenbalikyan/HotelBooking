import React,{useState} from 'react'
import FormVisitors from '../../Components/Inputs/FormVisitors/FormVisitor'
import './visitors.styles.css'
import {connect} from 'react-redux'
import {removeVisitorThunk} from '../../Thunks'
import TableVisitors from '../../Components/Info/TableVisitors/TableVisitors'
const Visitors = ({removeVisitor})=>{
    const [formData,setForm]= useState({})

    const handleRemoveVisitor=(id)=>{
        removeVisitor(id)
    }

    const handleEditVisitor=(data)=>{
        setForm(data)
    }
    return(
        <div className="visitors">
            <aside className="asideRoom">
                <FormVisitors formData={formData}/>
            </aside>
            <main className="mainTable">
                <TableVisitors
                    remove={(id)=>handleRemoveVisitor(id)}
                    edit={(data)=>handleEditVisitor(data)}
                />
            </main>
        </div>
    )
}

const mapStateToProps = (state) => {
    const { visitors } = state
    return {
        visitors
    }
  }
  const mapDispatchToProps = (dispatch) => {
    return {
      removeVisitor:(id)=>{
        dispatch(removeVisitorThunk(id))
      },
    }
  }
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Visitors);