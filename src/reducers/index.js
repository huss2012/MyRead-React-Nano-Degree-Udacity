import { combineReducers } from 'redux'
import users from './users.js'
import questions from './questions.js'
import authedUser from './authedUser.js'

export default combineReducers({
    users,
    questions,
    authedUser,
})

