import React, { useState, useEffect } from 'react'
import netlifyIdentity from 'netlify-identity-widget'

import EmployeeList from '../employeeList/EmployeeList'
import AddEmployee from '../addEmployee/AddEmployee'
import FilterEmployees from '../filterEmployee/FilterEmployees'

// Helpers
import { loginUser, logoutUser } from '../identityActions'

// Styles
import './App.css'

const App = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const currentUser = localStorage.getItem('currentUser')
    if (currentUser) {
      setUser(currentUser)
    } else {
      loginUser()
    }
    netlifyIdentity.on('login', currentUser => setUser({ currentUser }, loginUser()))
    netlifyIdentity.on('logout', () => setUser( null, logoutUser() ))
  }, [user])

  // Open Identity Widget
  const handleLogIn = () => {
    netlifyIdentity.open()
  }

  // Close Identity Widget
  const handleLogOut = () => {
    netlifyIdentity.logout()
  }

  return (
    <div className="App">
      {user ? (
        <div className='App card-panel'>
          <button
            className="tirtiaryBtn logout"
            onClick={handleLogOut}
          >
            Logout
          </button>
          <FilterEmployees />
          <AddEmployee />
          <EmployeeList />
        </div>
      ) : (
        <div className='App'>
          <div className='Login welcome-info'>
            <h1>Addativo Employees Challenge</h1>
            <h3>Please Login to Continue</h3>
            <button
              className="tirtiaryBtn"
              onClick={handleLogIn}
            >
              Login
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
