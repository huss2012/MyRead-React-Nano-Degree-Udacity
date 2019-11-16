//Data needed:
import { getInitialData } from '../util/api.js'

//Actions Needed: 
import { receiveUsers } from '../actions/users'

import { receiveQuestions } from '../actions/questions'



//This function is for handling the inital data when the app loads:
export function handleInitialData(){
    return (dispatch) => {
        return getInitialData().then(({users, questions}) => {
            dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))
        })
    }
}
