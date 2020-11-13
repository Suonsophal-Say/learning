import React,{useState} from 'react'

function Hookcounter() {

    const [Count, setCount]= useState(0)
    return (
        <div>
            <button onClick={() => setCount(Count+1)}> Count {Count}</button>
        </div>
    )
}

export default Hookcounter
