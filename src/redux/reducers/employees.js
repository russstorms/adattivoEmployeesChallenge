import { ADD_EMPLOYEE, EDIT_EMPLOYEE } from '../actionTypes'

const initialState = {
  employees: [
    {
      id: 0,
      firstName: 'Russ',
      middleInitial: 'M',
      lastName: 'Storms',
      dateOfBirth: 'October 3, 1990',
      dateOfEmployment: 'March 25, 2020',
      isActive: true,
    },
  ],
}

export default function employees(state = initialState, action) {
  switch (action.type) {
    case ADD_EMPLOYEE: {
      const { content } = action.payload
      return {
        ...state,
        employees: [...state.employees, content],
      }
    }
    case EDIT_EMPLOYEE: {
      const { content } = action.payload
      return {
        ...state,
        employees: state.employees.map(employee =>
          employee.id === content.id ? content : employee
        ),
      }
    }
    default:
      return state
  }
}