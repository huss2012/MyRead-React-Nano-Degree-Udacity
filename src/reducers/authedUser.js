import { SET_AUTHED_USER } from '../actions/authedUser.js'




export default function authedUser(state = null, action){
    switch(action.type){
        case SET_AUTHED_USER:
            return{
                id: action.id,
            }
        default: 
            return state
    }
}