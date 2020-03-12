import React from 'react'
import EditEmployee from '../editEmployee/EditEmployee'

// Styles
import './Employee.css'
import 'animate.css/animate.min.css'

// Employee Status
const active = (
  <h5 className='active-status'>
    Active
  </h5>
)

const inactive = (
  <h5 className='inactive-status'>
    Inactive
  </h5>
)

const Employee = ({ employee }) => (
  <div className='Employee animated fadeIn'>
    <h2 className='employee-name'>
      {employee.firstName} {employee.middleInitial !== '' ? `${employee.middleInitial}.` : ''} {employee.lastName}
    </h2>
    <div>
      <span className='employee-info'>
        Date of Birth:
      </span>
      <span className='employee-date'>
        {employee.dateOfBirth}
      </span>
    </div>
    <div>
      <span className='employee-info'>
        Date of Employment:
      </span>
      <span className='employee-date'>
        {employee.dateOfEmployment}
      </span>
    </div>
    {employee.isActive ? active : inactive}
    <EditEmployee employee={employee} />
  </div>
)

export default Employee

