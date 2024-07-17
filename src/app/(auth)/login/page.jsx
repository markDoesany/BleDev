import React from 'react'
import { handleGithubLogin, handleLogin } from '@/lib/actions'

async function LoginPage() {
  return (
    <div>
      <form action={handleGithubLogin}>
        <button>Login using github</button>
      </form>
      <form action={handleLogin}>
        <input type="text" placeholder='username' name='username'/>
        <input type="password" placeholder='password' name='password' />
        <button>Login</button>
      </form>
    </div>
  )
}

export default LoginPage