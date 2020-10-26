import React, {createContext, useContext, useState} from 'react'
import {Redirect} from 'react-router-dom'

const defaultValue = {username: 'arito', email: 'xxx@aritoblog.com', isAuthenticated: false}
const AuthContext = createContext(defaultValue)

const AuthProvider = ({children, loginRedirectTo = '/login', homeRedirectTo = '/'}) => {
  const [state, setState] = useState(defaultValue)

  return (
    <AuthContext.Provider value={{...state, setState, loginRedirectTo, homeRedirectTo}}>
      {children}
    </AuthContext.Provider>
  )
}

const withAuthentication = (WrappedComponent, isRequired = true) => {
  const AuthConsumer = (props) => {
    const value = useContext(AuthContext)

    if (isRequired) {
      if (value.isAuthenticated) {
        return <WrappedComponent {...props} {...value} />
      }
      return <Redirect to={value.loginRedirectTo}/>
    }

    if (value.isAuthenticated) {
      return <Redirect to={value.homeRedirectTo}/>
    }
    return <WrappedComponent {...props} {...value} />
  }
  return AuthConsumer
}

export {AuthProvider, withAuthentication}