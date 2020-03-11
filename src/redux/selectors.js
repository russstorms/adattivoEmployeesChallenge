import { STATUS_FILTERS } from '../redux/actions'

// Filter employee state
export const getEmployeesState = store => store.employees

export const getEmployeeList = store =>
  getEmployeesState(store) ? getEmployeesState(store).employees : []

export const getEmployeesByVisibilityFilter = (store, statusFilter) => {
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

