import React,{useState, useMemo} from 'react'

function Count() {
    const[counterone, setcounterone]=useState(0)
    const[countertwo, setcoutertwo]=useState(0)

    const increamone=()=>{
        setcounterone(counterone+1)
    }
    const increamtwo=()=>{
        setcoutertwo(countertwo+1)
    }
    const isEvent= useMemo(() =>{
        let i=0
        while(i<200000000) i++ //set show this is slowly
        return counterone % 2 === 0
    },[counterone])
    return (
        <div>
            <div>
                <button onClick={increamone}>Count one -{counterone}</button>
                <span>{isEvent ? 'Even':'Odd'}</span>
            </div>
            <div>
                <button onClick={increamtwo}>Count tow - {countertwo}</button>
            </div>
            
        </div>
    )
}

export default Count
