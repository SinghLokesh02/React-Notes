import React from 'react'
import { useState } from 'react'
 

 
const Counter = () => { 
    let [count, setCount] = useState(0);
  return (
    <div>
        <h1>{count}</h1>
        <div className="btns">
        <button onClick={()=>{setCount(++count);}}>Increment</button>
        <button onClick={()=>{setCount(0);}}>Reset</button>
        <button onClick={()=>{setCount(--count);}}>Decrement</button>
        </div>
    </div>
  )
}
export default Counter
