import React,{useState} from 'react'

function HookcounterTwo() {
    const InitialCount=0;
    const [count, setCount]=useState(InitialCount)
    const IncrementFives =()=>{
        for(let i=0;i<5;i++){
            setCount(preCount =>preCount+1)
   
        }
    }
    return (
        <div>
            Count:{count}<br/>
            <button onClick={()=>{setCount(InitialCount)}}>Reset</button>
            <button onClick={()=>{setCount(count+1)}}>Increment</button>
            <button onClick={()=>{setCount(count-1)}}>Decrement</button>
            <button onClick={IncrementFives}>IncrementFives</button>
        </div>
    )
}

export default HookcounterTwo
