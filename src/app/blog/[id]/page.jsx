import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import {notFound} from 'next/navigation'

async function getData(id) {
  // console.log(id);
  const res = await fetch(`http://localhost:3000/api/posts/${id}`);

  if (!res.ok) {
    return notFound()
  }
 
  return res.json()
}

export async function generateMetadata({ params }) {
  const data= await getData(params.id);
  return {
    title: data.title,
    description: data.desc,
  }
}


const BlogPost = async ({params}) => {
  const data= await getData(params.id);
  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>{data.desc}</p>
          <div className={styles.author}>
            <Image src={data.img} alt='' width={50} height={50} className={styles.authorImg}/>
            <p className={styles.authorName}>{data.username}</p>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image src={data.img} fill={true} alt='' className={styles.image} />
        </div>
      </div>

        <div className={styles.bottomContainer}>
          <p className={styles.desc}>{data.content}</p>
      </div>
    </div>
  )
}

export default BlogPost