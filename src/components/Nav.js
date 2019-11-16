import React, { Component } from 'react'

import { connect } from 'react-redux'

import { NavLink, Link, Redirect } from 'react-router-dom'

import { setAuthedUser } from '../actions/authedUser'

class Nav extends Component{

    handleLogout= (e) => {
        e.preventDefault()
        this.props.setAuthedUser(null)
    }
    render(){
        return(
            <div>
            <nav>
                <div>
                    <ul>
                        <li>
                            <Link name='home' as={NavLink} to='/' exact="true">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link as={NavLink} to='/leaderboard'> 
                                Leader Board
                            </Link>
                        </li>
                        <li>
                            <Link to='/add'>
                                Add a Question
                            </Link>
                        </li>
                    </ul>
                    <div>Hello {this.props.authedUser}</div>
                    <button onClick={this.handleLogout}>
                            Logout
                        </button>
                </div>
            </nav>
            </div>
        )
    }
}


function mapStateToProps({ authedUser }){
    return{
        authedUser: authedUser.id
    }
}
export default connect( mapStateToProps, { setAuthedUser })(Nav)