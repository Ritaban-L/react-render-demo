import React, { useState } from 'react'

export const UseState = () => {

    const[count,setCount] = useState(0)

    console.log('UseState Render');
    return(
        <div>
            <h3>{count}</h3>
            <button onClick={()=> setCount(c => c+1)}>Increment</button>
            <button onClick={()=> setCount(0)}>Set to 0</button>  {/*when we set a count to already set number, it renders only one more time and not any more */}
            <button onClick={()=> setCount(5)}>Set to 5</button>
        </div>
    )
}