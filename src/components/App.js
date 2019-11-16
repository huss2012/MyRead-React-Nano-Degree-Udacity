import React , { Component, Fragment }from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { handleInitialData } from '../actions/shared'
import Home from './Home'
import LeaderBoard from './LeaderBoard.js'
import Nav from './Nav.js'
import Login from './Login'
import NewQuestion from './NewQuestion.js'
import QuestionCard from './QuestionCard'





class App extends Component{
  componentDidMount(){
    const { dispatch } = this.props
    dispatch(handleInitialData())
  }
  render(){
    return(
      <Router>
        <div>
          {
            this.props.authedUser === null ? 
            (
              <Route  component={Login}/>
            ) 
            : 
            (
              <Fragment>
               <Nav/> 

               <Switch>
                 <Route exact path='/' component={Home} />
                 <Route  path='/leaderboard' component={LeaderBoard} />
                 <Route  path='/add' component={NewQuestion} />
                 <Route  path='/questions/:question_id' component={QuestionCard}/>
               </Switch>

              </Fragment>
            )
          }
        </div>



      </Router>
    )
  }
}

function mapStateToProps({  authedUser }) {
  return{
    authedUser
  }
}

export default connect(mapStateToProps)(App)
