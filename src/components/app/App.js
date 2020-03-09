import React, { useState, useEffect } from 'react'
import netlifyIdentity from 'netlify-identity-widget'

// Helpers
import { loginUser, logoutUser } from '../identityActions'

// Styles
import './App.css'

const App = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const currentUser = localStorage.getItem('currentUser')
    if (currentUser) {
      setUser(JSON.parse(user))
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
      <header className="App-header">
          Adattivo Employees Challenge
      </header>
      {user ? (
        <div className='App card-panel'>
          <button
            onClick={handleLogOut}>
            &larr;Logout
          </button>
        </div>
      ) : (
        <div className='App'>
          <div className='Login card-panel'>
            <h1>Welcome</h1>
            <h3>Please login to continue</h3>
            <button
              onClick={handleLogIn}>
              Login&rarr;
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
