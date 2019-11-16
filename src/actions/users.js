import {saveQuestionAnswer} from '../util/api'
import { answerQuestion } from '../actions/questions'


export const RECEIVE_USERS = 'RECEIVE_USERS'
export const USER_ADD_QUESTION = 'USER_ADD_QUESTION'
export const USER_ADD_ANSWER = 'USER_ADD_ANSWER'





export function receiveUsers(users){
    return {
        type: RECEIVE_USERS,
        users,
    }
}

export function userAddQuestion({ id, author }){
    return{
        type: USER_ADD_QUESTION,
        id,
        author,
    }
}

export function userAddAnswer(authedUser, qid, answer){
    return{
        type: USER_ADD_ANSWER,
        authedUser,
        qid,
        answer,
    }
}


export function handleSaveQuestionAnswer(authedUser, qid, answer){
    return (dispatch) => {
        dispatch(answerQuestion(authedUser, qid, answer))
        dispatch(userAddAnswer(authedUser, qid, answer))
        return saveQuestionAnswer(authedUser, qid, answer).catch(e => {
            console.warn('Error in handleSaveQuestionAnswer', e)
        })
    }
}