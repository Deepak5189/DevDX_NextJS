import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/button/button'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" fill={true} alt='meeting' className={styles.img}/>
        <div className={styles.imageText}>
          <h1 className={styles.imageTitle}>Digital storytellers</h1>
          <h2 className={styles.imageDesc}>Handcrafting award winning digital experience</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h2 className={styles.title}>Who we are</h2>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae dolorum officiis facere maiores minima laboriosam magnam suscipit! Quis recusandae ea molestias consequuntur, exercitationem repellendus vel saepe assumenda odit minus nam fuga a quas. Nemo asperiores dolorum soluta omnis, eveniet veritatis, debitis recusandae adipisci error velit aliquam, modi alias quos. Quis iusto, accusamus dolore at, atque ipsa cum adipisci illo error voluptate a repellendus delectus.
          <br />
          <br /> 
          Voluptatibus vitae labore consequuntur quos! Velit quibusdam, necessitatibus nisi doloremque beatae voluptatem dolores, quidem ducimus totam a corporis. Quisquam est nobis accusamus voluptas? Aut at maxime laudantium autem optio maiores necessitatibus, aliquid reiciendis similique perspiciatis eius!</p>
        </div>
        <div className={styles.item}>
          <h2 className={styles.title}>What we do</h2>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae dolorum officiis facere maiores minima laboriosam magnam suscipit! Quis recusandae ea molestias consequuntur, exercitationem repellendus vel saepe assumenda odit minus nam fuga a quas. Nemo asperiores dolorum soluta omnis, eveniet veritatis, debitis recusandae adipisci error velit aliquam, modi alias quos. Quis iusto, accusamus dolore at, atque ipsa cum adipisci illo error voluptate a repellendus delectus.
          <br />
          <br />
          -Creative illustration
          <br />
          <br />
          - dynamic website
          <br />
          <br />
          - fast and handy mobile apps</p>
          <Button title='contact us' url='/contact'/>
        </div>
      </div>
    </div>
  )
}

export default About