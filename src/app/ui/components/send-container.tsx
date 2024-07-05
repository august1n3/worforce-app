

export default function SendContainer(){

    return(
        <div className="chatsendcontainer">
            <form action="" method="post">
                <input type="text" name="message" placeholder="type here" className="chatfield"/>
                <button type="submit" className="sendbutton">Send</button>
            </form>
        </div>
    );
}