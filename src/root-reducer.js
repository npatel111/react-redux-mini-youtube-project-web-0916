import { combineReducers } from 'redux'

function reducer(state = [], action){
  switch (action.type) {
    case "FETCH_VIDEOS":
      return action.payload
    default:
      return state
  }
}


const rootReducer = combineReducers({reducer})

export default rootReducer
