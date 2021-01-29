import { SUCCESSFUL, FAILED, LOGOUT} from './action-types';

export function successfulLogin (data) {
    return (dispatch) => {
        dispatch({
            type: SUCCESSFUL,
            payload: data,
        })
    }
};

export function failedLogin (data) {
    return (dispatch) => {
        dispatch({
            type: FAILED,
            payload: data
        })
    }
};

export function logoutUser (data) {
    return (dispatch) => {
        dispatch({
            type: LOGOUT,
            payload: data
        })
    }
}