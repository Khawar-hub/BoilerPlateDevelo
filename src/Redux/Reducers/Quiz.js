import { QUIZ,SCORE, SELECTEDANS } from '../Types';
const intialState = {
    score:0,
    SelectedAns:0,
    questions:[{question:'2+2=',ans1:'4',ans2:'3',ans3:'1',ans4:'5',correct:'4'},
               {question:'2+3=',ans1:'4',ans2:'3',ans3:'1',ans4:'5',correct:'5'},
               {question:'2+4=',ans1:'4',ans2:'3',ans3:'1',ans4:'6',correct:'6'},
               {question:'2+5=',ans1:'7',ans2:'3',ans3:'1',ans4:'5',correct:'7'},
               {question:'2+6=',ans1:'8',ans2:'3',ans3:'1',ans4:'5',correct:'8'},
               {question:'2+7=',ans1:'4',ans2:'3',ans3:'1',ans4:'9',correct:'9'},
               {question:'2+8=',ans1:'4',ans2:'10',ans3:'1',ans4:'5',correct:'10'},
               {question:'2+9=',ans1:'4',ans2:'3',ans3:'11',ans4:'5',correct:'11'},
               {question:'2+10=',ans1:'4',ans2:'3',ans3:'1',ans4:'12',correct:'12'},
               {question:'2+11=',ans1:'4',ans2:'13',ans3:'1',ans4:'5',correct:'13'},
               {question:'2+12=',ans1:'14',ans2:'3',ans3:'1',ans4:'5',correct:'14'}]

}
const reducer = (state = intialState, action) => {
    switch (action.type) {
        case QUIZ: {
            return {
                ...state,
                questions: action.payload,
                
            }
        }
        case SCORE: {
            return {
                ...state,
                score: action.payload,
                
            }
        }
        case SELECTEDANS: {
            return {
                ...state,
                SelectedAns: action.payload,
                
            }
        }
      
        default:
            return state

    }
}
export default reducer;