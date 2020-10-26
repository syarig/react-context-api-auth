import React from 'react'
import {withAuthentication} from './auth'

const Login = () => {
  return (
    <div>
      <h1>ログイン</h1>
      <p style={{marginBottom: 0}}>
        ユーザID:
      </p>
      <input type="text"/>
      <p style={{marginBottom: 0}}>
        Email:
      </p>
      <input type="email"/>
    </div>
  )
}

export default withAuthentication(Login, false)
