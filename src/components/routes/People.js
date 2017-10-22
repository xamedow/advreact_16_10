import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom';
import AddPerson from '../people/AddPerson';
import { connect } from 'react-redux';
import { addPerson } from '../../ducks/people';

class PeoplePage extends Component {
    handleAddPerson = ({firstName, lastName, email}) => this.props.addPerson(firstName, lastName, email)

    render() {
        return (
            <div>
                <h2>People Page</h2>
                <NavLink to='/people/add' activeStyle = {{color: 'red'}}>Add person</NavLink>
                <Route path='/people/add' render={() => <AddPerson onSubmit={this.handleAddPerson} />} />
            </div>
        )
    }
}

export default connect(null, { addPerson })(PeoplePage);