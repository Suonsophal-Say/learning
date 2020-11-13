import React, { Component } from 'react'
import Child from './Child';

 class CLC extends Component {
     constructor(props) {
         super(props);

         this.state = {
              count:0,
              show: true
         }
         console.log('constructor')
     }
     incream= () =>{
        this.setState((prevState)=>{
            return{count:prevState.count +1}
        })
     }

    componentWillMount(){
        console.log("component Will mount");
    }
    componentDidMount(){
        console.log('component Did mount');
    }
    shouldComponentUpdate(){
        return true;
    }
    componentWillUpdate(){
        console.log('component will update');
    }
    componentDidUpdate(){
        console.log('component did update');
    }
    render() {
        console.log('render to dom');

        return (
            <div>
                <h1>Component Life Cycle</h1>
                {this.state.show === true ? <Child />: null}
                <button onClick={()=>{
                    this.setState({
                        show: !this.state.show
                    })
                }}>Toggle</button>
                <button onClick={this.incream}>Icon {this.state.count}</button>
            </div>
        )
    }
}

export default CLC
