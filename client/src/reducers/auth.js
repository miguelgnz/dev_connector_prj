import {
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from '../actions/types';

const initialState = {
    token: localStorage.getItem('token'),           //GETTING THE TOKEN STORED LOCALLY
    isAuthenticated: null,
    loading: true,
    user: null
};


export default function (state = initialState, action) {
    
    const { type, payload } = action;
    
    switch (type) {
        case REGISTER_SUCCESS:
            localStorage.setItem('token', payload.token);   //Passing obtained token to payload.token
            return {                                        //Returning the new state
                ...state,
                payload,
                isAuthenticated: true,
                loading: false
            }
        
        case REGISTER_FAIL:
            localStorage.removeItem('token');
            return {                                        //Returning the new state
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false
            }
        default:
            return state;
    }
}