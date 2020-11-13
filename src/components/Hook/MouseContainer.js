import React,{useState} from 'react'
import FunctionMouse from './FunctionMouse'

function MouseContainer() {
    const [display, setdisplay]=useState(true)
    return (
        <div>
            <button onClick={()=>setdisplay(!display)}>Toggle Display</button>
            {display && <FunctionMouse />}
        </div>
    )
}

export default MouseContainer
