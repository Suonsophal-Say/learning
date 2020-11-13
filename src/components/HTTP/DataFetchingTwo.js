import React,{useReducer, useEffect} from 'react'
import axios from 'axios'

const initialState={
    loading: true,
    Error:'',
    post:{}

}
const reducer=(state, action)=>{
    switch(action.type){
        case 'FETCH_ACCESS':
            return{
                loading: false,
                Error:'',
                post: action.payload
            }
        case 'FETCH_ERROR':
            return{
                loading: false,
                post: {},
                Error: 'Something went wrong!'   
            }
        default:
            return state    
    }
}

function DataFetchingTwo() {
    const[state, dispatch]=useReducer(reducer, initialState)

    useEffect(()=>{
        axios
            .get('https://jsonplaceholder.typicode.com/posts/1')
            .then( Response=>{
                dispatch({type: 'FETCH_ACCESS', payload: Response.data})
            })
            .catch( Error=>{
                dispatch({type: 'FETCH_ERROR'})
            })
    }, [])
    return (
        <div>
            {state.loading? 'loading': state.post.title}
            {state.Error? Error:null}
        </div>
    )
}

export default DataFetchingTwo
