import { combineReducers } from 'redux'
import statusFilter from './visibilityFilter'
import employees from './employees'

const employeeApp = combineReducers({
  statusFilter,
  employees,
})

export default employeeApp