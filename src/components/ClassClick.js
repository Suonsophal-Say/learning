import React, { Component } from 'react'

export class ClassClick extends Component {
    clickhandler(){
        console.log("Click Class")
    }
    render() {
        return (
            <div>
                <button onClick={this.clickhandler}>Click Class</button>
            </div>
        )
    }
}

export default ClassClick
