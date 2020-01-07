import {createStore,compose,applyMiddleware} from 'redux';
import reducers from '../reducer'
import thunk from 'redux-thunk'

const middleWare = [thunk];
const composeEnh = compose || window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ;
const store = createStore(
    reducers,
    composeEnh(applyMiddleware(...middleWare)) //|| window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
export default store;
