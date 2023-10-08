import Button from '@/components/button/button'
import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import {items} from './data.js'
import {notFound} from 'next/navigation'

const getdata = (cat)=>{
    const data=items[cat];

    if(data){
        return data;
    }
    return notFound();
}

const Category = ({params}) => {
    const data= getdata(params.category)
  return (
    <div className={styles.container}>
        <h1 className={styles.catTitle}>{params.category}</h1>
        {data.map((item)=>(
        <div className={styles.item} key={item.id}>
            <div className={styles.content}>
                <h1 className={styles.title}>{item.title}</h1>
                <p className={styles.desc}>{item.desc}</p>
                <Button title="See more" url='#' />
            </div>
            <div className={styles.imageContainer}>
                <Image src={item.image} alt='img' fill={true} className={styles.image}/>
            </div>
        </div>
        ))}
    </div>
  )
}

export default Category