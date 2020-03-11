import {
  ADD_EMPLOYEE,
  EDIT_EMPLOYEE,
  TOGGLE_ACTIVE,
  SET_STATUS_FILTER,
} from './actionTypes'

// Action creators
export const addEmployee = content => ({
  type: ADD_EMPLOYEE,
  payload: {
    content,
  },
})

export const editEmployee = content => ({
  type: EDIT_EMPLOYEE,
  payload: {
    content,
  },
})

export const toggleActive = (index) => {
  return { 
    type: TOGGLE_ACTIVE,
    index
  }
}

export const setStatusFilter = filter => ({
  type: SET_STATUS_FILTER,
  payload: { filter },
})

// Filters
export const STATUS_FILTERS = {
  ALL: 'All',
  ACTIVE: 'Active',
  INACTIVE: 'Inactive',
}

