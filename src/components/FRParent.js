import React, { Component } from 'react'
import FRInput from './FRInput'

class FRParent extends Component {
    constructor(props) {
        super(props)
        this.inputRef=React.createRef()
    }
    hanlderchange= () =>{
        this.inputRef.current.focus();
    }
    render() {
        return (
            <div>  
                <FRInput ref={this.inputRef}/>
                <button onClick={this.hanlderchange}>Focus input</button>
            </div>
        )
    }
}

export default FRParent

 