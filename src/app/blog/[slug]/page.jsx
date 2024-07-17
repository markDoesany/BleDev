import React from 'react'
import styles from "./singlePost.module.css"
import Image from 'next/image'
import PostUser from '@/components/postUser/PostUser'
import { getPost} from '@/lib/data'

const getData = async (slug) => {
  try {
    const res = await fetch(`http://localhost:3000/api/blog/${slug}`);

    if (!res.ok){
      throw new Error("Something went wrong")
    }

    return res.json()
  } catch (error) {
    throw new Error(error)
  }
}
export const metadata = {
  title: "Ble Dev Singe Post Page",
  description: "This is the single post page",
};

const SinglePostPage = async({params}) => {
  const {slug} = params
  // const post= await getPost(slug);
  const post= await getData(slug);

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={post.img} fill alt='post' className={styles.img}/>
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <PostUser userId={post.userId}/>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Publish</span>
            <span className={styles.detailValue}>{post.createdAt.toString().slice(0,16)}</span>
          </div>
        </div>
        <div className={styles.content}> 
          {post.desc}
        </div>
      </div>
    </div>
  )
}

export default SinglePostPage