import React from 'react'
import { connect } from 'react-redux'
import Employee from '../employee/Employee'
import { getEmployeesByVisibilityFilter } from '../../redux/selectors'

const EmployeeList = ({ employees }) => (
  <div className='employee-list'>
    {employees.map(employee => {
      return <Employee key={`employee-${employee.id}`} employee={employee} />
    })}
  </div>
)

const mapStateToProps = state => {
  const { visibilityFilter } = state
  const employees = getEmployeesByVisibilityFilter(state, visibilityFilter)
  return { employees }
}
export default connect(mapStateToProps)(EmployeeList)

