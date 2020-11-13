import React, { Component } from 'react'

 class ClassTime extends Component {
     interval
     constructor(props) {
         super(props);
         this.state={
             time: 0
         }
     }
     
     componentDidMount(){
         this.interval=setInterval(()=>{
             this.setState(prevState=>({time: prevState.time +1}))
         },1000)
     }
     componentWillUnmount(){
         clearInterval(this.interval)
     }
     

    render() {
        return (
            <div>
                Class time -{this.state.time}
        <button onClick={()=>clearInterval()}>Clear Time</button>
            </div>
        )
    }
}

export default ClassTime
