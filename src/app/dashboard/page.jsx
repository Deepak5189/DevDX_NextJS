"use client"

import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
import useSWR from 'swr'
import { useSession } from 'next-auth/react'
// import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const Dashboard = () => {
  const session=useSession();
  const router = useRouter();
  console.log(session);

  const fetcher = (...args) => fetch(...args).then(res => res.json())

  const { data, error, isLoading } = useSWR(`api/posts?username=${session.data?.user.name}`, fetcher)
  console.log(data);

  const handleSubmit= async (e)=>{
    e.preventDefault();

    const title=e.target[0].value
    const img=e.target[1].value
    const desc=e.target[2].value
    const content=e.target[3].value

    try{
      await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({title,desc,img,content,username: session.data.user.name})
      });
    }catch(err){
      console.log(err)
    }
  }
 
  if(session.status==="loading") {
    return <div>....loading</div>;
  }
  if(session.status==="unauthenticated"){
    router?.push('/dashboard/login');
  }

  
  if(session.status==="authenticated")
  {
    return (
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.posts}>
            {isLoading?<p>....Loading</p>: data?.map((item)=>(
              <div className={styles.post} key={item._id}>
                <div className={styles.img}>
                  <Image src={item.img} alt='image' width={200} height={200}/>
                </div>
                <h1 className={styles.postTitle}>{item.title}</h1>
                <span className={styles.delete}>X</span>
              </div>
            ))}
          </div>
          <div className={styles.new}>
            <form action="" className={styles.create_post} onSubmit={handleSubmit}>
              <h2 className={styles.heading}>Create New post</h2>
              <input type="text" placeholder='Post title here ' className={styles.input} />
              <input type="text" placeholder='place image url here' className={styles.input} />
              <input type="text" placeholder='Post description here' className={styles.input} />
              <textarea name="" placeholder='start typing here...' id="" cols="30" rows="10" className={styles.input}></textarea>
              <button className={styles.btn}>Create Post</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard