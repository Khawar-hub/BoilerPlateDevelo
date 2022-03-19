import { IMAGE } from '../Types';
const intialState = {
    imageData:{},
    isProductImageSelected:false
}
const reducer = (state = intialState, action) => {
    switch (action.type) {
        case IMAGE: {
            return {
                ...state,
                imageData: action.payload,
                isProductImageSelected:true
                
            }
        }
      
        default:
            return state

    }
}
export default reducer;