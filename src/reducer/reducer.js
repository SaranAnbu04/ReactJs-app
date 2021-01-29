import { SUCCESSFUL, FAILED, LOGOUT} from '../actions/action-types';

const initialState = {
    loggedIn : false,
}

const reducer = (state = initialState, action)=> {
    switch(action.type) {
        case SUCCESSFUL: 
            return {
                ...state,
                loggedIn: true
            };
        case FAILED: 
            return {
                ...state,
                loggedIn: false
            };
        case LOGOUT: 
            return {
                ...state,
                loggedIn: false
            };
        default:
            return state;
    } 
}

export default reducer;