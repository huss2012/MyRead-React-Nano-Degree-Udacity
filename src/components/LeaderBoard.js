 import React, { Component } from 'react'
 import { connect } from 'react-redux'
 import { Container, Row, Col } from 'react-bootstrap'

 const score = (user) => {
     return (Object.keys(user.answers).length + user.questions.length)
 }

 class LeaderBoard extends Component {
     render(){
         const { users } = this.props
         const usersList = Object.keys(users).map((id) => users[id]).sort((user1, user2) => score(user2) - score(user1))
         return(
             <div>
                 <ul>
                     {usersList.map((user) => {
                         const { id, name, avatarURL } = user
                         return(
                             <li key={id}>
                                 <Container fluid={true} className='score-Container'>
                                     <Row>
                                         <Col sm={5}>
                                             <img alt={name} src={avatarURL} style={{width: 100, height: 110, borderRadius: 50}} />
                                             <div>{name}</div>
                                         </Col>
                                         <Col sm={7}>
                                             <div className='score-title'> TOTAL SOCRE: {score(user)} </div>
                                         </Col>
                                     </Row>
                                 </Container>
                             </li>
                         )
                     }
                            
                     )}
                 </ul>
             </div>
         )
     }
 }

 function mapStateToProps({ users }){
     return{
         users
     }
 }
 export default connect(mapStateToProps)(LeaderBoard)