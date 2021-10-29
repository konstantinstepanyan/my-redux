import {INCREMENT, ASYNC_INCREMENT, DECREMENT, CHANGE_THEME} from './types';


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

export function changeTheme(){
    return{
        type: 'CHANGE_THEME'
    }
}


export function asyncIncrement(){
    return function(dispatch){
        setTimeout(()=>{
            dispatch({type: INCREMENT})
        }, 1500)
        
    }
}