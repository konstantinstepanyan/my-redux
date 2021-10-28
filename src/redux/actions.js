import {INCREMENT, ASYNC_INCREMENT, DECREMENT} from './types';


export function increment(){
    return{
        type: INCREMENT
    }
}

export function decrement(){
    return{
        type: DECREMENT
    }
}

export function asyncIncrement(){
    return function(dispatch){
        setTimeout(()=>{
            dispatch({type: INCREMENT})
        }, 1500)
        
    }
}