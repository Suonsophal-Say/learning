import React, { Component } from 'react'
import { UserCosumer } from './UserContext'

 class ComponentF extends Component {
    render() {
        return (
            <UserCosumer>
                
                {name=>{
                    return<h1>Hello {name}</h1>//name having from value Provider
                }}
            </UserCosumer>
        )
    }
}

export default ComponentF
