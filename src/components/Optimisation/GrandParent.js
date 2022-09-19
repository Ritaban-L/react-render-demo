import React, { useState } from "react";
import { ChildOne } from "./ChildOne";
import { ParentOne } from "./ParentOne";

export const GrandParent = () =>{

    const [newCount,setNewCount] = useState(0)

    return(
        <div>
            <h3>{newCount}</h3>
            <button onClick={()=> setNewCount((nc) => nc+1)}>
                GP Increment 
            </button>
            <ParentOne>
                <ChildOne />
            </ParentOne>
        </div>
    )
}