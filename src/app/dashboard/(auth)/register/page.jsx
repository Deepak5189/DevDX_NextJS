"use client"

import React, { useState } from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Register = () => {
  const [err, setErr]=useState(false);
  const router=useRouter();


  const HandleSubmit = async (e)=>{
    e.preventDefault();
    const name = e.target[0].value;
    const email=e.target[1].value;
    const password=e.target[2].value;

    try{
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      // console.log(res);
      res.status===201 && router.push("/dashboard/login?success=Account has been created");
      res.status===500 && setErr(true);
    } catch(err){
      setErr(true);
      // console.log("first");
    }

  }



  return (
    <div className={styles.main}>
      <form action="" className={styles.form} onSubmit={HandleSubmit}>
        <input placeholder='username' type="text" className={styles.input}required/>
        <input placeholder='email' type="email" className={styles.input} required/>
        <input placeholder='password' type="password" className={styles.input} required/>
        <button className={styles.btn}>submit</button>
      </form>
      {err && "Something went wrong!"}
      <Link href='login'>use another existing account</Link>
    </div>
  )
}

export default Register