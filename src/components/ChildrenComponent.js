import React from 'react'

export default function ChildrenComponent(props) {
    return (
        <div>
            <button onClick={()=>props.greenHandler('Child')}>greet Parent</button>
        </div>
    )
}
