import React, { Component } from 'react'

export class EvenBinding extends Component {
    constructor(){
        super();
        this.state={
            Message:'Welcome'
        }
        // this.clickHandler=this.clickHandler.bind(this)//three way
    }
    // clickHandler(){
    //     this.setState({
    //         Message:'GoodBye!'
    //     })
    //     console.log(this)
    // }
    clickHandler=()=>{
        this.setState({
            Message:'GoodBye!'
        })
    }
    // clickHandler=()=>{
        //if we arenot binding ,it not know (this) and (state) havn't price
        //that in constructor
    //     console.log(`Hello ${this.state.Message}`)
    // }
    render() {
        return (
            <div>
                <h1>{this.state.Message}</h1>
                {/* <button onClick={this.clickHandler.bind(this)}>Click me</button>//one way */}
                {/* <button onClick={()=>{this.clickHandler()}}>Click me</button>// two away */}
                <button onClick={this.clickHandler}>Click me</button>
            </div>
        )
    }
}

export default EvenBinding
