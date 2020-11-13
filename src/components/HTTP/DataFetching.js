import React,{useState, useEffect} from 'react'
import axios from'axios'

function DataFetching() {
    const[post, setPost]=useState({})
    const[id, setId]=useState(1)
    const[idFrombutton, setIdFrombutton]=useState(1)

    const handleClick=()=>{
        setIdFrombutton(id)
    }
    //API  when we delete number in text API showing Array(100) is axios now,then so we input number in text late it showing title of 
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFrombutton}`)
        .then(res=>{
            console.log(res)
            setPost(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }, [idFrombutton])
    return (
        <div>
            <input type='text' value={id} onChange={event=>setId(event.target.value)} />
            <button type="button" onClick={handleClick}>Fetch Post</button>
            <div>{post.title}</div>
            {/*  <ul>
                 {
                    post.map(post=><li key={post.key}>{post.title}</li>)
                 }
             </ul> */}
            
        </div>
    )
}

export default DataFetching
