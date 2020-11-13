import React, { Component } from 'react'


export class RefDemo extends Component {
    constructor(props) {
        super(props)
        this.inputRef=React.createRef()
        this.cbRef=null
        this.setcbRef=element=>{
            this.cbRef=element
        }
    }
    componentDidMount(){
        if(this.cbRef){
            this.cbRef.focus()
        }
        // this.inputRef.current.focus()
        // console.log(this.inputRef)
    }
    handlerchange= () =>{
        alert(this.cbRef.value)
        // alert(this.inputRef.current.value)
    }
    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef} />
                <input type='text' ref={this.setcbRef} />
                <button onClick={this.handlerchange}>Click me</button>
            </div>
        )
    }
}

export default RefDemo
