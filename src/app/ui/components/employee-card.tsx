import Image from "next/image";
import Link from "next/link";

export default function EmployeeCard(
    fullname: string, 
    profession: string,
    bio: string,
    image_link: string){
    return(
        <div className="employee-card">
            <Image src={image_link} alt="" className="employee-image" width={100} height={100}/>
            <div className="employee-details">
                <h2 className="employee-name">{fullname}</h2>
                <h3 className="employee-profession">{profession}</h3>
                <p className="employee-bio">{bio}</p>
            </div>
        </div>
    );

}


/**
 * <div>{EmployeeCard("Baba Tunde","Head Electrician","Am currently working for a non profit organiztion called humanity based in Kenya", "heroicon.svg")}</div> 
 * 
 * 
 */