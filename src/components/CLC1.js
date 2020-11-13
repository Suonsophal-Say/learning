import React, { Component } from 'react'

 class CLC1 extends Component {
     constructor() {
         super()
     
         this.state = {
              name:'Vishwas'
         }
         console.log('Lifecycle constructor')
     }
     static getDerivedStateFromProps(props,state){
         console.log('Lifecycle getDerivedStateFromProps')
         return null
     }
     componentDidMount(){
         console.log('component did Mount')
     }
     componentWillMount(){
         console.log("compnent will unmount")
     }
        
    render() {
        console.log('Lifecycle render')
        return (
            <div>
                Lifecycle
            </div>
        )
    }
}

export default CLC1
