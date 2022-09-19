import React, { useState } from 'react'
import { ChildTwo, MemoizedChildTwo } from './ChildTwo';

export const ParentTwo = () => {

    const[count,setCount] = useState(0)
    const[name, setName] = useState('Ritaban')

    console.log('Parent Render');
    return(
        <div>
            <h3>{count}</h3>
            <button onClick={()=> setCount(c => c+1)}>Increment</button>
            <h3>{name}</h3>
            <button onClick={()=> setName('RB')}>Change Name</button>
            {/* <ChildTwo name={name}/> */}
            <MemoizedChildTwo name={name}/>
        </div>
    )
}

