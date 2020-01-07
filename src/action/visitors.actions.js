  export const getVisitorsRequest = () => ({
    type: 'GET_VISITORS_REQUEST'
  })
  export const getVisitorsSuccsess = (data) => ({
    type: 'GET_VISITORS_SUCCSESS',
    payload: data
  })
  export const getVisitorsFailure = () => ({
    type: 'GET_VISITORS_FAILURE'
  })

//Create Visitor
  export const createVisitorSuccsess = (data) => ({
    type: 'CREATE_VISITOR_SUCCSESS',
    payload: data
  })
  export const createVisitorFailure = () => ({
    type: 'CREATE_VISITOR_FAILURE'
  })

//Edit Visitor
  export const editVisitorSuccsess = (data) => ({
    type: 'EDIT_VISITOR_SUCCSESS',
    payload: data
  })
  export const editVisitorFailure = () => ({
    type: 'EDIT_VISITOR_FAILURE'
  })

  //Remove Visitor
  export const removeVisitorSuccsess = (id) => ({
    type: 'REMOVE_VISITOR_SUCCSESS',
    payload: id
  })
  export const removeVisitorFailure = () => ({
    type: 'REMOVE_VISITOR_FAILURE'
  })