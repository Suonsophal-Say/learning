import React,{ useState, useEffect} from 'react'

function FunctionMouse() { 
    const[x,setX]=useState(0)
    const[y,setY]=useState(0)

    const logMousePosition= e => {
        console.log("Event logmouse positon")
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(()=>{ 
        console.log("Called useEffect");
        window.addEventListener('mousemove',logMousePosition)

        return()=>{
            console.log('component unmouting code')
            window.removeEventListener('mousemove',logMousePosition)
        }
    }, [])
    return (
        <div>
            Hook X-{x} Y-{y}
        </div> 
    )
}

export default FunctionMouse
