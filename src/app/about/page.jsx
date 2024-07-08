import React from 'react'
import Image from 'next/image'
import styles from './about.module.css'

function AboutPage() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Agency</h2>
        <h1 className={styles.title}>We create random ideas until we come up with an innovative one</h1>
        <p className={styles.desc}>
          We create ideas that are completely random just to showcase that we are unique.
          We are the world's number 2 leading tech company that is proficient in any programming
          lanuage except all. 
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1> 10K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1> 10K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1> 10K+</h1>
            <p>Year of experience</p>
          </div>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src="/about.png" fill alt='about image' className={styles.img}/>
      </div>
    </div>
  )
}

export default AboutPage