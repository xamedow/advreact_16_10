import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import SignIn from '../auth/SignIn'

class AuthPage extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <h2>Auth page</h2>
                <Route path = '/auth/signin' render = {() => <SignIn onSubmit = {this.handleSignIn}/>}/>
            </div>
        )
    }

    handleSignIn = (values) => console.log('---', 'sign in', values)
}

export default AuthPage