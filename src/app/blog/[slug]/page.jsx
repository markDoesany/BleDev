import React from 'react'
import styles from "./singlePost.module.css"
import Image from 'next/image'

function SinglePostPage() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src='/profile_1.jpg' fill alt='post' className={styles.img}/>
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image src='/profile_1.jpg' width={50} height={50} alt='post' className={styles.avatar}/>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Bronny James</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Publish</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}> 
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, eum nam aspernatur incidunt quaerat suscipit sequi delectus sunt iusto labore sint aperiam illo laborum officia eaque sed amet quis hic!
        </div>
      </div>
    </div>
  )
}

export default SinglePostPage