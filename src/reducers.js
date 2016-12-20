/**
 * Created by liangyujie on 2016/12/19.
 */

import { combineReducers } from 'redux'
import { ADD_USER, TOGGLE_USER, TOGGLE_USERS_STATUS, DELETE_USERS, SELECT_CHANGE, SET_SHOW_FILTER, ShowFilters } from './actions'
const { SHOW_ALL } = ShowFilters;

function users(state = [], action) {
    switch (action.type) {
        case ADD_USER:
            return [...state, {
                username: action.username,
                email: action.email,
                password: action.password,
                stop: false
            }];
        case TOGGLE_USER:
            return state.map((value, index) => {
                if (index === action.index) {
                    return {...value, stop: !value.stop}
                }
                return value
            });
        case TOGGLE_USERS_STATUS:
            return state.map((value, index) => {
                if (action.indexes.includes(index)) {
                    return {...value, stop: action.status}
                }
                return value
            });
        case DELETE_USERS:
            return state.filter((value, index) => !action.indexes.includes(index));
        default:
            return state
    }
}

function selects(state = [], action) {
    switch (action.type) {
        case SELECT_CHANGE:
            return action.indexes;
        default:
            return state
    }
}

function showFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_SHOW_FILTER:
            return action.showFilter;
        default:
            return state
    }
}

const userApp = combineReducers({users, selects, showFilter});
export default userApp
