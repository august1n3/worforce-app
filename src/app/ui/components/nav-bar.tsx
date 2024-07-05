"use client";

import Image from "next/image";
import Link from "next/link";
import "../style.css"
import { usePathname } from "next/navigation";
import clsx from "clsx"

export default function NavigationBar() {

    const pathname = usePathname();

    return (
      <div className="header">
          <Image
            src='/brandlogo.svg'
            alt=''
            width={224}
            height={47}
            className="logo"
          />
          <nav className="navlinks">
          <Link href='/' className={clsx({'boldText' : pathname == '/'})}>Home</Link>
          <Link href='/jobposts' className={clsx({'boldText' : pathname.includes('/jobposts')})}>Job Posts</Link>
          <Link href='/inbox' className={clsx({'boldText' : pathname.includes('/inbox')})}>Inbox</Link>
          <Link href='/notifications' className={clsx({'boldText' : pathname.includes('/notifications')})}>Notifications</Link>
          </nav>
          <div className="profile">
            <Image
            src='/profile.png'
            alt=""
            width={47}
            height={47}
            />
          </div>
      </div>
  );
}