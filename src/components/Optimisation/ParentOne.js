import React, { useState } from 'react'

export const ParentOne = (props) => {

    const[count,setCount] = useState(0)

    console.log('Parent Render');
    return(
        <div>
            <h3>{count}</h3>
            <button onClick={()=> setCount(c => c+1)}>Increment</button>
            {props.children}
        </div>
    )
}