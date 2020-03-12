import { STATUS_FILTERS } from '../actions'

const initialState = STATUS_FILTERS.ALL

// Filter reducer
const visibilityFilter = (state = initialState, action) => {
  switch (action.type) {
      case 'SET_VISIBILITY_FILTER': {
      return action.payload.filter
    }
    default: {
      return state
    }
  }
}

export default visibilityFilter

