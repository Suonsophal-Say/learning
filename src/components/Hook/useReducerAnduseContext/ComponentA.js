import React,{useContext} from 'react'
import { CountContext } from '../../../App'

function ComponentA() {
    const countContext=useContext(CountContext)//this CountContext taking from app.js
    return (
        <div>
            {/* in button is calling to using CountContext, we need to call object way*/}
            Component A {countContext.countState}
            <button onClick={()=>countContext.countDispatch('Increament')}>Increament</button>
            <button onClick={()=>countContext.countDispatch('Decreament')}>Decreament</button>
            <button onClick={()=>countContext.countDispatch('Reset')}>Reset</button>
        </div> 
    )
}

export default ComponentA