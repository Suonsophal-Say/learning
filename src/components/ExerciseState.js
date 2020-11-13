import React, { Component } from 'react'

export class ExerciseState extends Component {
    constructor(){
        super();
        this.state={
            massage:'Welcome visitor'
        }
    }
    handlechange(){
        this.setState({massage:'Welcom back soon'})
    }
    render() {
        return (
            <div>
                <h1>{this.state.massage}</h1>
                <button onClick={()=>this.handlechange()}>click change</button>
            </div>
        )
    }
}

export default ExerciseState

