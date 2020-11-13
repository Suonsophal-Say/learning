import React, { Component } from 'react'

 class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             comment:'',
             topic: 'vue'
        }
    }
    handleUsernameChange=(event)=>{
        this.setState({
            username:event.target.value
        })
       
    }
    handleCommentsChange = (event) =>{
        this.setState({
            comment: event.target.value
        })
    }
    handletopicchange =(event)=>{
        this.setState({
            topic: event.target.value
        })
    }
    hanlesubmit = (event)=>{
        alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`)//I take it for state
        event.preventDefault();
    }
    render() {
        const { username, comment, topic }=this.state;
        return (
            <form onSubmit={this.hanlesubmit}>
                <div>
                    <label>Username</label>
                    <input type='text' value={username} onChange={this.handleUsernameChange}></input>
                </div>
                <div>
                    <label>Comment</label>
                    <textarea value={comment} 
                    onChange={this.handleCommentsChange}></textarea>
                </div>
                <div>
                    <label>Topic</label>
                    <select value={topic} onChange={this.handletopicchange} >
                    <option value='react'>React</option>
                    <option value='vue'>Vue</option>
                    <option value='Angular'>Angular</option>
                </select>
                 </div>
                <button>Submit</button>
            </form>
        )
    }
}

export default Form
