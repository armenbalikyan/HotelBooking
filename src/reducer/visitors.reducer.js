const initialState = {
    gettingVisitors: false,
    visitorsData: [],
}

export default function visitorsReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_VISITORS_REQUEST":
            return {
                ...state,
                gettingVisitors:true
            }
            case "GET_VISITORS_SUCCSESS":
            return{
                ...state,
                gettingVisitors:false,
                visitorsData:action.payload
            }
            case "GET_VISITORS_FAILURE":    
            return {
                ...state,
                gettingVisitors:false,
            }

  //Create Visitor
  case "CREATE_VISITOR_SUCCSESS":
 return {
     ...state,
     visitorsData: [...state.visitorsData,action.payload]
 }
 case "CREATE_VISITOR_FAILURE":    
 return {
     ...state,
 }


 //Edit Visitor
 case "EDIT_VISITOR_SUCCSESS":
const lastData = state.visitorsData.filter(elem => elem.id !== action.payload.id)
 return {
     ...state,
     editData: [...lastData,action.payload]
 }
 case "EDIT_VISITOR_FAILURE":    
 return {
     ...state,
 }


 //REMOVE Visitors
 case "REMOVE_VISITOR_SUCCSESS":
    const filtered = state.visitorsData.filter(elem => elem.id !== action.payload)
    return {
        ...state,
        visitorsData: [...filtered]
    }
    case "REMOVE_VISITOR_FAILURE":    
    return {
        ...state,
    }
            default:
                return state
    }
}