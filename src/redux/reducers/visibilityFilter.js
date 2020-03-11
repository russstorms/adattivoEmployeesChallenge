import { SET_STATUS_FILTER } from '../actionTypes'
import { STATUS_FILTERS } from '../actions'

const initialState = STATUS_FILTERS.ALL

const statusFilter = (state = initialState, action) => {
  switch (action.type) {
      case SET_STATUS_FILTER: {
      return action.payload.filter
    }
    default: {
      return state
    }
  }
}

export default statusFilter

