import React from "react";
import { useState } from "react";
import { ChildA, MemiozedChildA } from "./ContextChildren";

export const CountContext = React.createContext()
const CountProvider = CountContext.Provider

export const ContextParent = () => {

    const [count,setCount] = useState(0)

    console.log('ContextParent render')
    return(
        <div>
            <h3>{count}</h3>
            <button onClick={()=>setCount(c=>c+1)}>
                Increment
            </button>
            <CountProvider value={count}>
                {/* <ChildA /> */}
                <MemiozedChildA />
            </CountProvider>
        </div>
    )
}