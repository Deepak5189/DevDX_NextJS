"use client"
import React from 'react'
import Link from 'next/link'
import styles from './navbar.module.css'
import ToggleMode from '../togglemode/togglemode'
import { signOut } from 'next-auth/react'

const links=[
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "DashBoard",
    url: "/dashboard",
  }
]

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>DevDX</Link>
      <div className={styles.links}>
        <ToggleMode/>
        {links.map((link) => (
          <Link key={link.id} href={link.url}>{link.title}</Link>
        ))}
        <button 
        className={styles.logout} 
        onClick={() => signOut()}>
          Logout
        </button>
      </div>
    </div>
  )
}

export default Navbar