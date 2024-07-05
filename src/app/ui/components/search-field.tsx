import { Button, Icon, InputBase, TextField, inputBaseClasses } from "@mui/material";
import SearchSharpIcon from '@mui/icons-material/SearchSharp';

export default function SearchField() {
 
    return(
        <div>
            <form className="searchfield">
                <input type="text" name="search_employee" placeholder="search"/>
                <button><SearchSharpIcon  color={"inherit"} fontSize={"large"}/></button>
            </form>
        </div>);
}