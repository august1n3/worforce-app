
import clsx from "clsx"

import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import React from "react";

export default function FilterCard(
    name: string,
    isSelected: boolean
){
   
  
    return(
        <div className={clsx({"filtercard": isSelected == true},{"filtercardinactive": isSelected == false})}>
            <p>{name}</p>
            <CloseSharpIcon className={clsx({"inactive": isSelected == false})}/>
        </div>
    );
}