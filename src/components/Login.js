import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'


class Login extends Component{
    state={
        value: "",
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
        const authedUser = this.state.value
        authedUser === '' ? 
            alert('Please Choose an Account Frist')
        :
            this.props.setAuthedUser(authedUser)
    }
    handleChange = (e) => {
        this.setState({ value: e.target.value })
    }
    render() {
               
        return(
           <div>
               <div>
                   <div>
                       <form onSubmit={this.handleSubmit}>
                           <h1>Welcome in Would You Rather Game!</h1>
                            <h4>Please Choose an Account...</h4>
                            <span>Log in as</span>
                            <select onChange={this.handleChange} value={this.state.value}>
                                <option defaultValue>Choose One...</option>
                                {
                                    this.props.users.map(user => (<option value={user.id} key={user.id}>
                                        {user.id}
                                    </option>
                                    ))}
                            </select>
                            <button type='submit'>
                                    Login!
                            </button>
                       </form>
                   </div>
               </div>
           </div>
        )
    }
}

//bring the users from the store:
function mapStateToProps({ users }){
    return{
        users: Object.values(users),
        
    }
}
export default connect(mapStateToProps, {setAuthedUser})(Login)