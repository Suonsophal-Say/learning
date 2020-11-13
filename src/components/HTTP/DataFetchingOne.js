import React,{useState, useEffect} from 'react'
import axios from 'axios'

function DataFetchingOne() {
    const[loading, setLoading]=useState(true)
    const[Error, setError]=useState('')
    const[Post, SetPost]=useState({})

    useEffect(()=>{
        axios
            .get('https://jsonplaceholder.typicode.com/posts/1')
            .then( Response=>{
                setLoading(false)
                setError('')
                SetPost(Response.data)
            })
            .catch(Error=>{
                setLoading(false)
                setError('Something went wrong!')
                SetPost({})
            })
    },[])
    return (
        <div>
            {loading? 'loading': Post.title}
            {Error? Error:null}
        </div>
    )
}

export default DataFetchingOne
