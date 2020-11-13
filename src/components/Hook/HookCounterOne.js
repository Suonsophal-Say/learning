import React,{useState, useEffect} from 'react'


function HookCounterOne() {
    const [count, setcount]=useState(0)
    const [name, setName]=useState('')

    useEffect( () => {
        console.log("UseEffect- Update document title")
        document.title=`Your click ${count} time`
    }, [count])//in function we need to take useEffect to array,for taking input isn't equal to button
    return (
        <div>
            <input type='text' value={name} onChange={e=>setName(e.target.value)}/>
            <button onClick={()=>{setcount(prevCount=>prevCount+1)}}>Click {count} time</button>
        </div>
    )
}

export default HookCounterOne
