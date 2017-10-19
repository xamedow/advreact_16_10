import React, { Component } from 'react'
import {Route, NavLink} from 'react-router-dom'
import SignIn from '../auth/SignIn'
import SignUp from '../auth/SignUp'

class AuthPage extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <h2>Auth page</h2>
                <NavLink to = '/auth/signin' activeStyle = {{color: 'red'}}>sign in</NavLink>
                <NavLink to = '/auth/signup' activeStyle = {{color: 'red'}}>sign up</NavLink>
                <Route path = '/auth/signin' render = {() => <SignIn onSubmit = {this.handleSignIn}/>}/>
                <Route path = '/auth/signup' render = {() => <SignUp onSubmit = {this.handleSignUp}/>}/>
            </div>
        )
    }

    handleSignIn = (values) => console.log('---', 'sign in', values)
    handleSignUp = (values) => console.log('---', 'sign up', values)
}

export default AuthPage