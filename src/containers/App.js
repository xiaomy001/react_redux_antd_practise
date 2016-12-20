/**
 * Created by liangyujie on 2016/12/20.
 */

import React from 'react'
import { connect } from 'react-redux'
import { toggleUser, addUser, deleteUsers, selectChange, toggleUsersStatus, setShowFilter, ShowFilters } from '../actions'
import AddUser from '../components/AddUser'
import UserList from '../components/UserList'
import Footer from '../components/Footer'

const { SHOW_ALL, SHOW_DISABLED, SHOW_ENABLED } = ShowFilters;

class App extends React.Component {
    render() {
        const { dispatch, users, selects, filter } = this.props;
        return (
            <div>
                <AddUser onAddClick={(username, email, password) => dispatch(addUser(username, email, password))} />
                <UserList
                    users={users}
                    selects={selects}
                    onSelectChange={indexes => dispatch(selectChange(indexes))}
                    onRowDeleteClick={index => dispatch(deleteUsers([index]))}
                    onRowToggleClick={index => dispatch(toggleUser(index))}
                    onUsersToggleClick={(indexes, status) => dispatch(toggleUsersStatus(indexes, status))} />
                <Footer filter={filter} onSetFilter={filter => dispatch(setShowFilter(filter))} />
            </div>
        )
    }
}

function selectUsers(users, filter) {
    switch (filter) {
        case SHOW_ALL:
            return users;
        case SHOW_DISABLED:
            return users.filter(value => value.stop);
        case SHOW_ENABLED:
            return users.filter(value => !value.stop);
        default:
            return users
    }
}

function select(state) {
    return {
        users: selectUsers(state.users, state.showFilter),
        selects: state.selects,
        filter: state.showFilter
    }
}

export default connect(select)(App)
