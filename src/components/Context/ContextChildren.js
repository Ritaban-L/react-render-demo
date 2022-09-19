import React, { useContext } from "react";
import { CountContext } from "./ContextParent";

export const ChildA = () =>{

    console.log('Child A Render');
    return(
        <div>
            <h3>Child A</h3>
            <ChildB />
        </div>
    )
}

export const ChildB = () =>{
    
    console.log('Child B Render');
    return(
        <div>
            <h3>Child B</h3>
            <ChildC />
        </div>
    )
}

export const ChildC = () =>{
    
    const count = useContext(CountContext)
    console.log('Child C Render');
    return(
        <div>
            <h3>Child C count = {count}</h3>
        </div>
    )
}

export const MemiozedChildA = React.memo(ChildA)