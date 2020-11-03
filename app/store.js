import thunkMiddleWare from 'redux-thunk'
import {createStore, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import {composeWithDevTools} from 'redux-devtools-extension'

//change for a file
function reducer(){

}

const middleWare  = composeWithDevTools(applyMiddleware(thunkMiddleWare,createLogger({collapsed:true})))
const store = createStore(reducer,middleWare)

export default store