import React, { Component } from 'react'
import ChildrenComponent from './ChildrenComponent'

export class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             parentname: 'Parent'
        }
         this.greenParent=this.greenParent.bind(this)
    }
     greenParent(chilname){
         alert(`Hello ${this.state.parentname} from ${chilname}`)
     }
    
    render() {
        return (
            <div>
                <ChildrenComponent greenHandler={this.greenParent} />
            </div>
        )
    }
}
export default ParentComponent
