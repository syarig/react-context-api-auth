import React from 'react'
import {withAuthentication} from './auth'

const Profile = ({username, email}) => {
  return (
    <div>
      <h1>プロフィール</h1>
      <p>{username}</p>
      <p>{email}</p>
    </div>
  )
}

export default withAuthentication(Profile)
