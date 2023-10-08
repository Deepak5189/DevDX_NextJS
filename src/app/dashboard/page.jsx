"use client"

import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
import useSWR from 'swr'
import { useSession } from 'next-auth/react'
import Link from 'next/link'

const Dashboard = () => {
  const session=useSession();
  console.log(session);

  const fetcher = (...args) => fetch(...args).then(res => res.json())

  const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)
 
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  

  return (
    <div className={styles.main}>
      <div className={styles.container}>Dashboard</div>
      <Link href='/dashboard/login'>
        <button className={styles.btn}>LogIn</button>
      </Link>
      <Link href='/dashboard/register'>
        <button className={styles.btn}>Register</button>
      </Link>
    </div>
  )
}

export default Dashboard