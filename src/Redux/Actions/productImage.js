import { IMAGE } from '../Types';
export const productImage = payload => {
    return {
        type: IMAGE,
        payload: payload
    }
}