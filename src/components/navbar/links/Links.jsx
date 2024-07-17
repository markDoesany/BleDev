"use client"

import React, { useState } from 'react';
import styles from './links.module.css';
import NavLink from './navLink/NavLink'
import Image from 'next/image';
import { handleLogout } from '@/lib/actions';

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

function Links({session}) {
  
  const [open, setOpen] = useState(false);  
  const isAdmin = true;
  console.log(session)
  return (
    <div>
      <div className={styles.links}>
        {links.map((link, index)=> <NavLink item={link} key={index}/>)}
        {
          session?.user ? (
            <>
              {session.user?.isAdmin && <NavLink item={{title: "Admin", path: "/admin"}}/>}
              <form action={handleLogout}>
                <button className={styles.logout}>Logout</button>
              </form>
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