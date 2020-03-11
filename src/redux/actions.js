// Action creators
export const addEmployee = content => ({
  type: 'ADD_EMPLOYEE',
  payload: {
    content,
  },
})

export const editEmployee = content => ({
  type: 'EDIT_EMPLOYEE',
  payload: {
    content,
  },
})

export function toggleActive(index) {
  return { 
    type: 'TOGGLE_ACTIVE',
    index
  }
}

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  payload: { filter },
})

// Filters
export const VISIBILITY_FILTERS = {
  ALL: 'All',
  ACTIVE: 'Active',
  INACTIVE: 'Inactive',
}

