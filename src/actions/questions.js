import { saveQuestion } from '../util/api'
import { userAddQuestion } from '../actions/users'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'

//this function is for the initial data in the app: 
export function receiveQuestions(questions){
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

export function addQuestion(question){
    return{
        type: ADD_QUESTION,
        question,
    }
}

export function answerQuestion( authedUser, qid, answer){
    return{
        type: ANSWER_QUESTION,
        authedUser,
        qid,
        answer,
    }
}

export function handleSaveQuestion(optionOneText, optionTwoText, author){
    return (dispatch) => {
        return saveQuestion({optionOneText, optionTwoText, author}).then((question) => {
            dispatch(addQuestion(question))
            dispatch(userAddQuestion(question))
        })
    }
}