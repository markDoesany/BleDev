import React from 'react'
import styles from './blog.module.css'
import PostCard from '@/components/postCard/PostCard'
import { getPosts } from '@/lib/data'

const getData = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/blog", {cache: "no-store"})
  
    if (!res.ok){
      throw new Error("Something went wrong")
    }

    return res.json();
    
  } catch (error) { 
    throw new Error(error.message)
  }
}

export const metadata = {
  title: "Ble Dev Blog Page",
  description: "This is the blog page",
};

const BlogPage = async () => {
  // const posts = await getPosts();
  const posts = await getData();

  return (
    <div className={styles.container}>
      {posts && posts.map(post => {
        return (
          <div className={styles.post} key={post._id}>
            <PostCard post={post}/>
          </div>
        )
      })}
    </div>
  )
}

export default BlogPage