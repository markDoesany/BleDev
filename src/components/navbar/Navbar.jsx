import React from 'react';
import Link from 'next/link';
import Links from './links/Links';
import styles from './navbar.module.css';

function Navbar() {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Ble.dev
      </Link>
      <div>
        <Links/>
      </div>
    </div>
  )
}

export default Navbar