import React from 'react'
import styles from "./postUser.module.css"
import { getUser } from '@/lib/data'
import Image from 'next/image'

// const getData = async(userId) => {
//   try {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)

//     if (!res.ok){
//       throw new Error("Something went wrong")
//     }

//     return res.json()

//   } catch (error) {
//     throw new Error(error)
//   }
// }


const PostUser = async ({userId}) => {
  const user = await getUser(userId);
  return (
    <div className={styles.container}>
      <Image src={user.img} width={50} height={50} alt='post' className={styles.avatar}/>
      <div className={styles.text}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{user.username}</span>
      </div>
    </div>
  )
}

export default PostUser