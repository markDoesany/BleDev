import React from 'react'
import styles from './footer.module.css'

function Footer() {
  return (
    <div className={styles.container}>
        <div className={styles.logo}>Ble.dev</div>
        <div className={styles.text}> 
          Bladev creative thoughts agency &copy; All rights not reserved
        </div>
    </div>
  )
}

export default Footer