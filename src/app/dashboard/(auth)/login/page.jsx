"use client"

import { signIn, useSession } from 'next-auth/react'
// import React, { useState } from 'react'
import styles from "./page.module.css"
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Login = () => {
  const session=useSession();
  const router=useRouter();

  const handleSubmit = async (e)=>{
    e.preventDefault();
    const email=e.target[0].value
    const password=e.target[1].value
    await signIn("credentials",{email, password});

  }

  if(session.status==="loading"){
    return <p>....Loading</p>;
  }

  if(session.status==="authenticated"){
    router?.push('/dashboard');
  }

  return (
    <div className={styles.loginbutton}>
      <div className={styles.main}>
      <form action="" className={styles.form} onSubmit={handleSubmit}>
        <input placeholder='email' type="email" className={styles.input} required/>
        <input placeholder='password' type="password" className={styles.input} required/>
        <button className={styles.btn}>submit</button>
      </form>
      {/* {err && "Something went wrong!"} */}
      <Link href='register'>New Here? Click to Register</Link>
    </div>
      <button className={styles.btn} onClick={()=>signIn("google")}>Login with google</button>
    </div>
  )
}

export default Login