"use client"

import SearchField from "./search-field";
import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx"
import "../style.css"

export default function JobBar(){
    
    const pathname = usePathname();

    return (
        <div className="jobbar">
            <nav className="joblinks">
                <Link href='/jobposts' className={clsx({'boldText' : pathname == '/jobposts'})}>All Jobs</Link>
                <Link href='/jobposts/open' className={clsx({'boldText' : pathname == '/jobposts/open'})}>Open Jobs</Link>
                <Link href='/jobposts/closed' className={clsx({'boldText' : pathname == '/jobposts/saved'})}>Closed Jobs</Link>
                <Link href='/jobposts/invites' className={clsx({'boldText' : pathname == '/jobposts/invites'})}>Sent Invites</Link>
           </nav>
            <SearchField/>

        </div>
    )
}