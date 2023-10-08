import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/button/button'

const Contact = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Let&apos;s Keep in Touch</h2>
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <Image src='/contact.png' fill={true} alt='contact' className={styles.image}/>
        </div>
        <form className={styles.form}>
          <input type="text" placeholder='name' className={styles.input} />
          <input type="text" placeholder='email' className={styles.input} />
          <textarea placeholder='message' cols="30" rows="10" className={styles.textArea}></textarea>
          <Button title='send' url='/' />
        </form>
      </div>
    </div>
  )
}

export default Contact