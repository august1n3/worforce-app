"use client"

import ContactCard from "./contact-card";


var contacts = [
    {
        name: "Baitubake nnnnnn",
        image_link: "",
        chatId: "1220921j10dj0wdjwq-d-qwdq",
    },
    {
        name: "Baitubake nnnnnn",
        image_link: "",
        chatId: "1220921j10djwdjwq-dj-qwdq",
    },
    {
        name: "Baitubake nnnnnn",
        image_link: "",
        chatId: "1220921j10dwdjwq-dj-qwdq",
    },
    {
        name: "Baitubake nnnnnn",
        image_link: "",
        chatId: "122092wdjwq-dj-qwdq",
    }
]

export default function ContactsList(){


    

    return(
        <div className="contactslist">
                {contacts.map((contact) => {
                    return (<button key={contact.chatId}>{ContactCard(contact.name, contact.image_link, contact.chatId,)}</button>)})}
        </div>
    );
}