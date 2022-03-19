import { QUIZ, SCORE, SELECTEDANS } from '../Types';
export const Quiz = payload => {
    return {
        type: QUIZ,
        payload: payload
    }
}
export const Score = payload => {
    return {
        type: SCORE,
        payload: payload
    }
}
export const SelectedAns = payload => {
    return {
        type: SELECTEDANS,
        payload: payload
    }
}