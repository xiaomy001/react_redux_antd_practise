/**
 * Created by liangyujie on 2016/12/19.
 */

export const ADD_USER = 'ADD_USER';
export const TOGGLE_USER = 'TOGGLE_USER';
export const TOGGLE_USERS_STATUS = 'TOGGLE_USERS_STATUS';
export const DELETE_USERS = 'DELETE_USERS';
export const SELECT_CHANGE = 'SELECT_CHANGE';
export const SET_SHOW_FILTER = 'SET_SHOW_FILTER';

export const ShowFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_DISABLED: 'SHOW_DISABLED',
    SHOW_ENABLED: 'SHOW_ENABLED'
};

export function addUser(username, email, password) {
    return {
        type: ADD_USER,
        username,
        email,
        password
    }
}

export function toggleUser(index) {
    return {
        type: TOGGLE_USER,
        index
    }
}

export function toggleUsersStatus(indexes, status) {
    return {
        type: TOGGLE_USERS_STATUS,
        indexes,
        status
    }
}

export function deleteUsers(indexes) {
    return {
        type: DELETE_USERS,
        indexes
    }
}

export function selectChange(indexes) {
    return {
        type: SELECT_CHANGE,
        indexes
    }
}

export function setShowFilter(showFilter) {
    return {
        type: SET_SHOW_FILTER,
        showFilter
    }
}
