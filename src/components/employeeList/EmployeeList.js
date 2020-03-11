import React from 'react'
import { connect } from 'react-redux'
import Employee from '../employee/Employee'
import { VISIBILITY_FILTERS } from '../../redux/actions'

// Styles
import './EmployeeList.css'

// Grab employee state
const getEmployeesState = store => store.employees

const getEmployeeList = store =>
  getEmployeesState(store) ? getEmployeesState(store).employees : []

const getEmployeesByVisibilityFilter = (store, visibilityFilter) => {
  const allEmployees = getEmployeeList(store)
  switch (visibilityFilter) {
    case VISIBILITY_FILTERS.ACTIVE:
      return allEmployees.filter(employee => employee.isActive)
    case VISIBILITY_FILTERS.INACTIVE:
      return allEmployees.filter(employee => !employee.isActive)
    case VISIBILITY_FILTERS.ALL:
    default:
      return allEmployees
  }
}

const EmployeeList = ({ employees }) => (
  <div className='EmployeeList'>
    {employees.map(employee => {
      return <Employee key={employee.id} employee={employee} />
    })}
  </div>
)

const mapStateToProps = state => {
  const { visibilityFilter } = state
  const employees = getEmployeesByVisibilityFilter(state, visibilityFilter)
  return { employees }
}
export default connect(mapStateToProps)(EmployeeList)

