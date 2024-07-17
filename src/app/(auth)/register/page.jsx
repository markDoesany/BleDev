import { handleRegister } from '@/lib/actions'
import React from 'react'
import styles from "./register.module.css"

function RegisterPage() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Register</h1>
        <form className={styles.form} action={handleRegister}>
          <input type="text" placeholder='username' name='username'/>
          <input type="email" placeholder='email' name='email'/>
          <input type="password" placeholder='password' name='password'/>
          <input type="password" placeholder='password again' name='passwordRepeat'/>
          <button>Register</button>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage