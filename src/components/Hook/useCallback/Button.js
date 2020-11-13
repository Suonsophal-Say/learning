import React from 'react'

function Button({hanldClick, children}) {
    console.log("Rendering button -", children)
    return (
        <div>
            <button onClick={hanldClick}>
                {children}
            </button>
        </div>
    )
}

export default React.memo(Button)
