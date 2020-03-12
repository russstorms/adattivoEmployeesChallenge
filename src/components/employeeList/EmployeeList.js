import React from 'react'
import { connect } from 'react-redux'
import Employee from '../employee/Employee'
import { STATUS_FILTERS } from '../../redux/actions'

// Styles
import './EmployeeList.css'

// Grab employee state
const getEmployeesState = store => store.employees

const getEmployeeList = store =>
  getEmployeesState(store) ? getEmployeesState(store).employees : []

// Passes filter and returns new state based on filter
const getEmployeesByStatusFilter = (store, statusFilter) => {
  const allEmployees = getEmployeeList(store)
  switch (statusFilter) {
    case STATUS_FILTERS.ACTIVE:
      return allEmployees.filter(employee => employee.isActive)
    case STATUS_FILTERS.INACTIVE:
      return allEmployees.filter(employee => !employee.isActive)
    case STATUS_FILTERS.ALL:
    default:
      return allEmployees
  }
}

// Map Employee component
const EmployeeList = ({ employees }) => (
  <div className='EmployeeList'>
    {employees.map(employee => {
      return <Employee key={employee.id} employee={employee} />
    })}
  </div>
)

const mapStateToProps = state => {
  const { statusFilter } = state
  const employees = getEmployeesByStatusFilter(state, statusFilter)
  return { employees }
}
export default connect(mapStateToProps)(EmployeeList)

