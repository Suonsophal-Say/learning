import React, { Component } from 'react'

 class ConditionalRender extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              isLoggedIn: true
         }
     }
     
    render() {
        

        let massage
        if(this.state.isLoggedIn==true){
            massage=<div>Welcome Vishwas</div>
        }
        else{
            massage=<div>Welcome Guest</div>
        }
         return<div>{massage}</div>

         
        // return(
        //     this.state.isLoggedIn ?
        //     (<div>Welcome Vishwas</div>) :
        //    (<div>Welcome Guest</div>)
        // )

        // if(this.state.isLoggedIn==true){
        //     return(
        //         <div>Welcome Vishwas</div>
        //     ) 
        // }
        // else{
        //     return(
        //         <div>Welcome Guest</div>
        //     )
        // }
    }
}

export default ConditionalRender
