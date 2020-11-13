import React from 'react'

function FunctionClick() {
    function clickhandler() {
        console.log("Click Function")
    }
    return (
        <div>
            <button onClick={clickhandler}>Click function</button>
        </div>
    )
}

export default FunctionClick
