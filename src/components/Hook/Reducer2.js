import React,{useReducer} from 'react'

//firstCount is object
const initialState={
    firstCounter:0,
    secoundCounter:10
}
const reducer=(state, action)=>{
    switch(action.type){
        case 'Increament':
            //return object
            return {...state, firstCounter: state.firstCounter + action.value}//(...state)this is show default it is firstCounter,and when we click another button it is showing default only 
        case 'Decreament':
            return {...state, firstCounter: state.firstCounter - action.value}
        case 'Increament2':
            return {...state, secoundCounter: state.secoundCounter + action.value} 
        case 'Decreament2':
            return {...state, secoundCounter: state.secoundCounter - action.value}
        case 'Reset':
            return initialState
        default:
            return state
    }
}
//'Increament' is string , and we need to convert our strng to object use {type: string}
function Reducer2() {
   const [count, dispatch]= useReducer(reducer, initialState)
    return (
        <div>
            <div>First - Count {count.firstCounter}</div>
            <div>secound - Counter {count.secoundCounter}</div>
            <button onClick={()=>dispatch({type: 'Increament', value: 1})}>
                Increament
            </button>
            <button onClick={()=>dispatch({type: 'Decreament', value: 1})}>
                Decreament
            </button>
            <button onClick={()=>dispatch({type: 'Increament', value: 5})}>
                Increament 5
            </button>
            <button onClick={()=>dispatch({type: 'Decreament', value: 5})}>
                Decreament 5
            </button>
            <div>
            <button onClick={()=>dispatch({type: 'Increament2', value: 1})}>
                Increament2
            </button>
            <button onClick={()=>dispatch({type: 'Decreament2', value: 1})}>
                Decreament2
            </button>
            </div>
            <button onClick={()=>dispatch({type: 'Reset'})}>Reset</button>

        </div>
    )
}

export default Reducer2
