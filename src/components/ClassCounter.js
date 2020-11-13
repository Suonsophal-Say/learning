import React, { Component } from 'react'

class ClassCounter extends Component {
    constructor(){
        super();
        this.state={
            count: 0,
            name:''
        }
    }
    componentDidMount(){
        document.title=`Clicked ${this.state.count} time`
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.count != this.state.count){
        console.log("Updating document title")
        document.title=`Clicked ${this.state.count} time`
        }
    }
    counter=()=>{
        this.setState(prevState=>{
            return {count: prevState.count +1}
        })
    }
    render() {
        return (
            <div>
                {/*this is useing only class  (input this if we arenot set to input, the input is similar to button,so we set input Unequal the Count) */}
                <input type="text"
                 value={this.state.name}
                 onChange={e=>{this.setState({name: e.target.value})}}
                 />
        <button onClick={this.counter}>count{this.state.count} time</button>
        <h1>See you title{this.state.name}</h1>
            </div>
        )
    }
}

export default ClassCounter
