 import React, { Component } from 'react'
 import { connect } from 'react-redux'
 import { Redirect } from 'react-router-dom'
 import { handleSaveQuestion } from '../actions/questions.js'

 import {  Button, Container } from 'react-bootstrap'


 class NewQuestion extends Component{
     state={
         optionOneText: '',
         optionTwoText: '',
         submitted: false,
     }

     handleSubmit = (event) => {
         event.preventDefault()
         const { authedUser, dispatch } = this.props
         const { optionOneText, optionTwoText } = this.state
         dispatch(handleSaveQuestion(optionOneText, optionTwoText, authedUser.id))
         this.setState({submitted: true})
     }

     handleChange= (event) => {
         event.preventDefault()
         this.setState({
             [event.target.name]: event.target.value
         })
     }


     render(){
         if(this.state.submitted){
             return <Redirect to='/' />
         }
         return(
             <Container>
                 <h1>Would You Rather!</h1>
                 <form onSubmit={this.handleSubmit}>
                         <label>Option 1: </label>
                         <input name='optionOneText'
                             defaultValue={this.state.optionOneText}
                             onChange={this.handleChange}
                             placeholder='First Option' />
                         <label>Option 2: </label>
                         <input  name='optionTwoText'
                             defaultValue={this.state.optionTwoText}
                             onChange={this.handleChange}
                             placeholder='Second Option'/>
                         <Button type='submit' className='button'>Submit</Button>
                 </form>
             </Container>
         )
     }
 }

 function mapStateToProps({ authedUser }){
     return{
         authedUser
     }
 }

 export default connect(mapStateToProps)(NewQuestion)