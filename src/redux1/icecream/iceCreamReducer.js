import { BUY_ICECREAM } from "./iceCreamType"

const initialState={
  numofIceCreams:10
}

const iceCreamReducer=(state=initialState,action)=>{
  switch(action.type){
    case BUY_ICECREAM:return{
      ...state,
      numofIceCreams:state.numofIceCreams-1
    }
    default:return state
  }
}

export default iceCreamReducer