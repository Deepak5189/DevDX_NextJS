"use client"

import React, { useContext } from 'react'
import styles from './togglemode.module.css'
import { ThemeContext } from '../../context/ThemeContext'


const ToggleMode = () => {

  const { toggle,mode } = useContext(ThemeContext);
  return (
    <div className={styles.container}>
        <div className={styles.light}/>
        <div className={styles.dark}/>
        <div className={styles.ball} style={mode==="light"?{right: '1px'}:{left: '1px'}} onClick={toggle} />
    </div>
  )
}

export default ToggleMode