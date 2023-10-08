import Image from 'next/image'
import styles from './page.module.css'
import Hero from 'public/hero.png'
import Button from '@/components/button/button'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better design for your digital products.</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, pariatur voluptatibus beatae harum eius unde voluptatum.</p>
        {/* <button className={styles.button}>See our works</button> */}
        <Button url='portfolio' title='See our works' />
      </div>
      <div className={styles.item}>
      <Image src={Hero} className={styles.img} alt='main_img'/>
      </div>
    </div>
  )
}
