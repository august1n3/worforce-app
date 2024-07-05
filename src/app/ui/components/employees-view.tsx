import EmployeeCard from "./employee-card";

var employees = [
    {
        name: "Baba Tunde",
        profession: "Head Electrician",
        bio: "Am currently working for a non profit organiztion called humanity based in Kenya",
        image_link: "/profile.png"

    },
    {
        name: "Baba Tunde",
        profession: "Head Electrician",
        bio: "Am currently working for a non profit organiztion called humanity based in Kenya",
        image_link: "/profile.png"

    },
    {
        name: "Baba Tunde",
        profession: "Head Electrician",
        bio: "Am currently working for a non profit organiztion called humanity based in Kenya",
        image_link: "/profile.png"

    },
    {
        name: "Baba Tunde",
        profession: "Head Electrician",
        bio: "Am currently working for a non profit organiztion called humanity based in Kenya",
        image_link: "/profile.png"

    },
    {
        name: "Baba Tunde",
        profession: "Head Electrician",
        bio: "Am currently working for a non profit organiztion called humanity based in Kenya",
        image_link: "/profile.png"

    },
    {
        name: "Baba Tunde",
        profession: "Head Electrician",
        bio: "Am currently working for a non profit organiztion called humanity based in Kenya",
        image_link: "/profile.png"

    },
]


export default function EmployeesView(){

    return(
        <div className="employeesview">
            {employees.map((employee) => {return (<div key={employee.name} className="cardcontainer">{EmployeeCard(employee.name, employee.profession, employee.bio, employee.image_link)}</div>);})}
        </div>
    );
}