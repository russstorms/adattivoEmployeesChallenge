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
    {
      id: 1,
      firstName: 'Robert',
      middleInitial: 'A',
      lastName: 'Plant',
      dateOfBirth: 'August 20, 1948',
      dateOfEmployment: 'November 17, 2019',
      isActive: false,
    },
    {
      id: 2,
      firstName: 'Anthony',
      middleInitial: 'K',
      lastName: 'Johnson',
      dateOfBirth: 'March 6, 1984',
      dateOfEmployment: 'January 16, 2020',
      isActive: true,
    },
    {
      id: 3,
      firstName: 'Dan',
      middleInitial: 'F',
      lastName: 'Abramov',
      dateOfBirth: 'August 14, 1982',
      dateOfEmployment: 'May 11, 2017',
      isActive: false,
    },
    {
      id: 4,
      firstName: 'Danny',
      middleInitial: 'E',
      lastName: 'Carey',
      dateOfBirth: 'May 10, 1961',
      dateOfEmployment: 'June 17, 2018',
      isActive: false,
    },
    {
      id: 5,
      firstName: 'Marcelo',
      middleInitial: '',
      lastName: 'Garcia',
      dateOfBirth: 'January 17, 1983',
      dateOfEmployment: 'February 18, 2020',
      isActive: true,
    },
  ],
}

export default function employees(state = initialState, action) {
  switch (action.type) {
    case 'ADD_EMPLOYEE': {
      const { content } = action.payload
      return {
        ...state,
        employees: [...state.employees, content],
      }
    }
    case 'EDIT_EMPLOYEE': {
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

