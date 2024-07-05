import ContactCard from "../ui/components/contact-card";
import ContactsList from "../ui/components/contacts-list";
import SendContainer from "../ui/components/send-container";

export default function InboxLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="inboxcontainer">
        <div className = "contactlistscontainer" >
           <ContactsList/>
        </div>
        <div className="chatroom">
            {children}
            <SendContainer/>
        </div>
      </div>
      
    );
  }