import React from 'react'
import { useEffect ,useRef,useState} from 'react'



const UseRefComponent = () => {
    // Variable to hold the count of renders
    let data = useRef(0);

    const ref = useRef();
    useEffect(()=>{
        console.log("rendering");
        data.current = data.current + 1;
        console.log(data.current);

        ref.current.style.backgroundColor = "red";
        
    })
    const [count,setCount] = useState(0);
    return (
    <div className='text-center'>
      <button onClick={()=>{setCount(count+1)}} className='border bg-black text-white p-2' ref={ref}>count : {count}</button>
      {/* <h1 className='bg-gray-500 text-3xl' >{data}</h1> */}
    </div>
  )
}

export default UseRefComponent
