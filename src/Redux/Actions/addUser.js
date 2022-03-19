import { ADD_USER, LOGIN, LOGOUT } from '../Types';
export const addUser = payload => {
    return {
        type: ADD_USER,
        payload: payload
    }
}