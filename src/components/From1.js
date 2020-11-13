import React, { Component } from 'react'

 class From1 extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              username:'',
              comment:'',
              topic:'React'
         }
     }
     handlerusernamechange= (event) =>{
         this.setState({
             username: event.target.value
         })
     }
     handlercommentchange =(event)=>{
         this.setState({
             comment:event.target.value
         })
     }
     handlertopicchange =(event)=>{
         this.setState({
             topic:event.target.value
         })
     }
     handlersubmit=(event)=>{
        alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`)
        event.preventDefault();
     }
    render() {
        return (
            <form onSubmit={this.handlersubmit}>
                <div>
                    <label>Username</label>
                    <input type='text' value={this.state.username} onChange={this.handlerusernamechange}></input>
                </div>
                <div>
                    <label>Comment</label>
                    <textarea value={this.state.comment} onChange={this.handlercommentchange}></textarea>
                </div>
                <div>
                    <label>Topic</label>
                    <select value={this.state.topic} onChange={this.handlertopicchange}>
                        <option value='react'>React</option>
                        <option value='Anglar'>Anglar</option>
                        <option value='Vue'>Vue</option>
                    </select>
                </div>
                <button>Submit</button>
             </form>
        )
    }
}

export default From1
