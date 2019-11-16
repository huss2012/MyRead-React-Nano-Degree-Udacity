import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { handleSaveQuestionAnswer } from '../actions/users'
 



 class UserCard extends Component{
    handleSubmit = (e) => {
        e.preventDefault()
        // this.props.dispatch(handleSaveQuestionAnswer(this.props.authedUser.id, this.props.question.id, ))
    }
     render(){
          console.log('The Qs are: ', this.props);
         const { author, optionOneText, optionTwoText, avatar, question } = this.props
         return(
             <div>
                 <h3>{author} Asked:</h3>
                 <Link name='Questions' to={`/questions/${question.id}`}>
                    <img  src={avatar} alt={`Avatar of ${author}`} style={{width: 100, height: 110, borderRadius: 50}}/>
                 </Link>
                 <form onSubmit={this.handleSubmit}>
                     <h5>Would You Rather!</h5>
                     <label>
                         <input type='radio' name="options" value= {optionOneText} /> 
                         {optionOneText}
                     </label>
                     <label>
                         <input type='radio' name="options" value= {optionTwoText}/> 
                         {optionTwoText}
                     </label>
                     <button type='submit' >Submit</button>
                 </form>
             </div>
         )
     }
 }


 function mapStateToProps({users, questions, authedUser}, {id}) { 
     const question = questions[id]
     return{
         users,
         question,
         author: question.author,
         optionOneText: question.optionOne.text,
         optionTwoText: question.optionTwo.text,
         avatar: users[question.author].avatarURL,
         authedUser
     }
 }

 export default connect(mapStateToProps)(UserCard)