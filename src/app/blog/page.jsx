import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './page.module.css'

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts")

  if (!res.ok) {

    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

const Blog = async () => {

  const data= await getData();
  return (
    <div className={styles.container}>
      {data.map((item)=>(
      <Link href={`/blog/${item._id}`} className={styles.links} key={item.id}>
        <div className={styles.item}>
          <div className={styles.imgContainer}>
            <Image src={item.img} alt='' width={400} height={250} className={styles.img}/>
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        </div>
      </Link>
      ))}
    </div>
  )
}

export default Blog