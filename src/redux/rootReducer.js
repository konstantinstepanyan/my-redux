import {combineReducers} from 'redux';
import {INCREMENT, DECREMENT} from './types';

function counterReducer(state = 0, action){
    
    if(action.type === INCREMENT){
     return state + 1;   
    }
    if (action.type === DECREMENT){
        return state - 1;  
    }
    
    return state;
}

const initialThemeState = {
    value: 'light'
}

function themeReducer(state = initialThemeState, action){
    
    return state;
}

export const rootReducer = combineReducers({
    counter: counterReducer,
    theme: themeReducer
});