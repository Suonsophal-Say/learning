//1. Class input text
    // import React, { Component } from 'react'
    //  class Classexample extends Component {
    //      constructor(props) {
    //          super(props);
    //          this.state={
    //              companyname:''
    //          }
    //      }
    //      showCompanyname=(e)=>{
    //          this.setState({companyname: e.target.value})         
    //      }
    //     render() {
    //         return (
    //             <div>
    //                 <h1>Simple Event Example</h1>
    //                 <p>Enter company name: <input type='type' value={this.state.companyname} onChange={this.showCompanyname}/></p>
    //                 <h3>you entered:{this.state.companyname}</h3>
    //             </div>
    //         )
    //     }
    // }
    // export default Classexample

//2. Function input text
    // import React,{useState,useEffect} from 'react'
    // function Classexample() {
    //     const [name, setname] = useState('')
    //     const [count, setcount]=useState(0)    
    //     // useEffect( ()=>{
    //     //     console.log("UseEffect- Update document title")
    //     //     document.title=`Click ${count} time`
    //     // },[count])
    //     useEffect(() => {
    //         console.log("UseEffect- Update document title")
    //         document.title=`Click ${count} time`
    //         return () => {          
    //         }
    //     }, [count])
    //     return (
    //         <div>
    //             <p>Enter Your Name: 
    //             <input type='text' 
    //             value={name} 
    //             onChange={e=>setname(e.target.value)}/></p>
    //             <h1>Here Your name: {name}</h1>
    //             <button onClick={() => setcount(count+1)}>Click{count} time</button>
    //         </div>
    //     )
    // }
    // export default Classexample
//3. Function Click counter using useReducer
    // import React,{useReducer} from 'react'
    //counter useReducer having normal
        // const initialState=0;
        // const reducer=(state, action)=>{
        //     switch(action){
        //         case 'incream':
        //             return state + 1
        //         case 'Discream':
        //             return state - 1
        //         case 'Reset':
        //             return initialState
        //         default:
        //             return state
        //     }
        // }
        // function Classexample() {
        //     const[count, dispatch]=useReducer(reducer, initialState)
        //     return (
        //         <div>
        //             <div>Count {count}</div>
        //             <button onClick={()=>{dispatch('incream')}}>Incream</button>
        //             <button onClick={()=>{dispatch('Discream')}}>Discream</button>
        //             <button onClick={()=>{dispatch('Reset')}}>Resets</button>

        //         </div>
        //     )
        // }
    //couter useReducer having object
        // const initialState={
        //     firstcounter:0
        // }
        // const reducer=(state, action)=>{
        //     switch(action.type){
        //         case 'incream':
        //             return {...state, firstcounter: state.firstcounter + action.value}
        //         case 'Discream':
        //             return {...state, firstcounter: state.firstcounter - action.value}
        //         case 'Reset':
        //             return initialState
        //         default:
        //             return state
        //     }
        // }
        // function Classexample() {
        //     const[count, dispatch]=useReducer(reducer, initialState)
        //     return (
        //         <div>
        //             <div>Count {count.firstcounter}</div>
        //             <button onClick={()=>dispatch({type: 'incream',value: 1})}>Incream</button>
        //             <button onClick={()=>dispatch({type: 'Discream',value: 1})}>Discream</button>
        //             <button onClick={()=>dispatch({type: 'Reset',value: 1})}>Resets</button>

        //         </div>
        //     )
        // }
    // export default Classexample
//4. Function mousemove
    // import React,{useState, useEffect} from 'react'
    // function Classexample() {
    //     const[x,setX]=useState(0)
    //     const[y,setY]=useState(0)
    //     const logMousePosition= e =>{
    //         setX(e.clientX)
    //         setY(e.clientY)
    //     }
    //     useEffect(() => {
    //         window.addEventListener("mousemove",logMousePosition)
    //         return () => {
    //             window.addEventListener("mousemove",logMousePosition)
    //         }
    //     }, [])
    //     return (
    //         <div>
    //             Hook X={x} - Y={y}
    //         </div>
    //     )
    // }
    // export default Classexample
