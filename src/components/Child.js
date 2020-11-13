import React, { Component } from 'react'

class Child extends Component {
    componentWillUnmount(){
        console.log('Child unmount mean that they have remove to parent')
    }
    render() {
        return (
            <div>
                <h1>ChildCLC</h1>
            </div>
        )
    }
}

export default Child
