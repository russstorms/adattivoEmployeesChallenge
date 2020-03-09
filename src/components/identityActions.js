import netlifyIdentity from 'netlify-identity-widget'

// Store user info in Local Storage — Using NetlifyIdentity
export const loginUser = () => {
  if (netlifyIdentity && netlifyIdentity.currentUser()) {
    const {
      app_metadata,
      created_at,
      confirmed_at,
      email,
      id,
      user_metadata,
    } = netlifyIdentity.currentUser()

    localStorage.setItem(
      'currentUser',
      JSON.stringify({
        ...app_metadata,
        created_at,
        confirmed_at,
        email,
        id,
        ...user_metadata,
      })
    )
  }
}

// Remove user info in Local Storage
export const logoutUser = () => {
  localStorage.removeItem('currentUser')
}