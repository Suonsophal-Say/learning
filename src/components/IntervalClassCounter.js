import React, { Component } from 'react'

export class IntervalClassCounter extends Component {
    constructor(props) {
        super(props);
        this.state={
            count:0
        }
    }
    componentDidMount(){
        console.log('component did mount')
         this.interval=setInterval(this.tick,1000)
        // this.interval=setInterval(() => {
        //     this.setState({
        //         count: this.state.count+1
        //     })
        // }, 1000);
    }
    
    tick=()=>{
        this.setState({
            count: this.state.count +1
        })
        console.log(`tick ${this.state.count}`)
    }
    
    componentWillUnmount(){
        console.log('component umount')
        clearInterval(this.interval)
    }
    render() {
        console.log('render')
        return (
            
            <div>
                 
                {this.state.count}
            </div>
        )
    }
}

export default IntervalClassCounter
