"use client"

import React, { useState } from 'react';
import styles from './links.module.css';
import NavLink from './navLink/NavLink'
import Image from 'next/image';

const links = [
  {
    title: "Homepage",
    path: "/"
  },
  {
    title: "About",
    path: "/about"
  },
  {
    title: "Contact",
    path: "/contact"
  },
  {
    title: "Blog",
    path: "/blog"
  }
  
]

function Links() {
  
  const [open, setOpen] = useState(false);  

  const session = true;
  const isAdmin = true;

  return (
    <div>
      <div className={styles.links}>
        {links.map((link, index)=> <NavLink item={link} key={index}/>)}
        {
          session ? (
            <>
              {isAdmin && <NavLink item={{title: "Admin", path: "/admin"}}/>}
              <button className={styles.logout}>Logout</button>
            </>
          ):
          <NavLink item={{title: "Login", path: "/login"}}/>
        }
      </div>
  
      <Image src='/menu.png' width={30} height={30} alt='menu' onClick={() => setOpen((prev) => !prev)} className={styles.menuButton}/>
      {
        open && (<div className={styles.mobileLinks}>
           {links.map((link, index)=> <NavLink item={link} key={index}/>)}
        </div>)
        
      }

    </div>

  )
}

export default Links;