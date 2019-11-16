 import React, { Component } from 'react'
 import { connect } from 'react-redux'
 import QuestionCard from './QuestionCard.js'
 import { Tabs, Tab } from 'react-bootstrap'

 class Home extends Component{
     render(){
         console.log('The authedUser Id is : ', this.props)
        
         return(
             <div>
                 <h3>Home</h3>
                 <Tabs defaultActiveKey={1}>
                     <Tab eventKey={1} title='Unanswered Questions'>
                        <ul>
                            {
                                this.props.unanswered.map((id) => (
                                    <li key={id}>
                                        <QuestionCard id={id}/>
                                    </li>
                                ))
                            }
                        </ul>
                     </Tab>
                     <Tab eventKey={2} title='Answered Questions'>
                        <ul>
                             {
                                 this.props.answered.map((id) => (
                                     <li key={id}>
                                         <QuestionCard id={id}/>
                                     </li>
                                 ))
                             }
                        </ul>
                     </Tab>
                 </Tabs>
             </div>
         )
     }
 }

 //Q) what Data Do We need from the store?
 function mapStateToProps({questions, authedUser, users}){
     const questionsList = Object.keys(questions)
     const questionListOrdered = questionsList.sort((a,b) => questions[b].timestamp - questions[a].timestamp)
     const questionsAnsweredByAuthedUser = (authedUser.id !== undefined) ? Object.keys(users[authedUser.id].answers) : ''
     return{
        questionIds: Object.keys(questions)
     .sort((a,b) => questions[b].timestamp - questions[a].timestamp),
        answered: questionListOrdered.filter((question) => {
            return questionsAnsweredByAuthedUser.includes(question) ? question : null
        }),
        unanswered: questionListOrdered.filter((question) => {
            return questionsAnsweredByAuthedUser.includes(question) ? null : question 
        }),
     }
 }

 export default connect(mapStateToProps)(Home)