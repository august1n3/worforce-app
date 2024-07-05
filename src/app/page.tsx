
import EmployeesView from "./ui/components/employees-view";
import FilterCard from "./ui/components/filter-card";
import SearchBar from "./ui/components/search-bar";


export default function Home() {
  
  return(
    <div>
        <SearchBar/>
        <div><EmployeesView/></div>
    </div>
  );
}
