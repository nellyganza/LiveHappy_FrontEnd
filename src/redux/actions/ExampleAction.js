import {API} from './AxiosAPI';
import { EXAMPLE_OF_TYPES,EXAMPLE_OF_TYPES_ERROR } from '../types/exampleTypes';

export const ExampleAction = ()=>{
    return API.get('/user/login')
      .then((res)=>{
        dispatch({
            type:EXAMPLE_OF_TYPES,
            result:res.data
        })
      })
      .catch(err=>{
        dispatch({
            type:EXAMPLE_OF_TYPES_ERROR,
            error:res.data
        })
      })
}