"use client"

import { signIn } from 'next-auth/react'
import React, { useState } from 'react'
import styles from "./page.module.css"
import Link from 'next/link'

const Login = () => {
  const [err, setErr]=useState(false);

  const handleSubmit = async (e)=>{
    e.preventDefault();
    const email=e.target[0].value
    const password=e.target[1].value
    signIn("credentials",{email, password});

  }

  return (
    <div className={styles.loginbutton}>
      <div className={styles.main}>
      <form action="" className={styles.form} onSubmit={handleSubmit}>
        <input placeholder='email' type="email" className={styles.input} required/>
        <input placeholder='password' type="password" className={styles.input} required/>
        <button className={styles.btn}>submit</button>
      </form>
      {err && "Something went wrong!"}
      <Link href='login'>use another existing account</Link>
    </div>
      <button className={styles.btn} onClick={()=>signIn("google")}>Login with google</button>
    </div>
  )
}

export default Login