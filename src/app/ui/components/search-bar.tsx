"use client"

import { FilterAltOutlined, FilterSharp } from "@mui/icons-material";
import SearchField from "./search-field";
import FilterCard from "./filter-card";
import { useState } from "react";

var filters = ["Top rated", "Low rated", "Still seeking" ]

export default function SearchBar(){


     
    return(
        <div className="searchbar">
            <div className="filterbg"><FilterAltOutlined className="filtericon" color={"inherit"} fontSize={"large"}/></div>
            <div className="filters"><>
                {filters.map((filter) => {
                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        const [active, setActive] = useState(false)

                        const clickHandler = () => {
                            setActive((active) => !active);
                          };
                    return (<button key={filter} onClick={clickHandler}>{FilterCard(filter, active)}</button>)})}
            </></div>
            <SearchField/>
        </div>
    );
}