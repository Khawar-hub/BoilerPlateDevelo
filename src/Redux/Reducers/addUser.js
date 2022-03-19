import { LOGIN, LOGOUT,ADD_USER } from '../Types';
const intialState = {
    user:[]
}
const reducer = (state = intialState, action) => {
    switch (action.type) {
        case ADD_USER: {
            return {
                ...state,
                user: action.payload,
                
            }
        }
      
        default:
            return state

    }
}
export default reducer;