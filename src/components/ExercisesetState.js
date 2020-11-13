import React, { Component } from 'react'
import ResultsetState from './ResultsetState';

export class ExercisesetState extends Component {
    constructor(){
        super();
        this.state={
            count:0//1
        }
    }
    increase=()=>{
        this.setState((prevState)=>{
            return{count:prevState.count + 1 };//count: is new count. preState.count is old count
            
        });
        //console.log(this.state.count)//show old count: 0
        
    }
    decrease=()=>{
        this.setState((prevState)=>{
            return{count:prevState.count - 1 };//count: is new count. preState.count is old count
            
        });
    }
       
    // handleFive(){
    //     this.handlecount();//+1
    //     this.handlecount();//+1
    //     this.handlecount();//+1
    //     this.handlecount();//+1
    //     this.handlecount();//+1=5+5=10
        
    // }
    
    render() {
        return (
            <div>
                {/* (This is ResultsetState) it is children of props */}
                <ResultsetState count={this.state.count}>This is ResultsetState</ResultsetState>
                <button onClick={()=>this.increase()}>Click me increase</button>
                <button onClick={()=>this.decrease()} disabled={this.state.count===0?true:false}>Click me decrease</button>
            </div>
        )
    }
}

export default ExercisesetState
