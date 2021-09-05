import { EXAMPLE_OF_TYPES } from "../types/exampleTypes";


const initialState ={
    pending:false,
    error:null
}

 export const ExampleReducer = (state = initialState,action)=>{
    switch(action.type){
        case EXAMPLE_OF_TYPES:
           return {
             ...state,
              pending: true
          }
        default:
            return state
}
}