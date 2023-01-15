import { configureStore } from '@reduxjs/toolkit';

const createReducer = (state = { counter: 0}, action ) => {
    if(action.type === 'i'){
        return{
            counter: state.counter + 1
        }
    }
    return state
};

const store = configureStore(createReducer)

export default store;