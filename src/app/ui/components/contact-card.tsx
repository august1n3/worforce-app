import { Avatar } from "@mui/material";
import clsx from "clsx"
import React from "react";
import Link from "next/link"
import { usePathname } from "next/navigation";

export default function ContactCard(
    name: string,
    image_link: string,
    chatId: string,
){
   
    const pathname = usePathname();
  
    return(
        <div className={clsx({"selectedContact": pathname == ("/inbox/"+ chatId)},{"unselectedContact": pathname != ("/inbox/"+ chatId)})}>
        <Link href={"/inbox/" + chatId}>
            <Avatar alt={name} src={image_link}/>
            <p>{name}</p>
        </Link>
        </div>
    );
}