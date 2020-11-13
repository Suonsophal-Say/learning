import React from 'react'

export default function ResultsetState(props) {
    return (
        <div>
            
            <h1>{props.children} : {props.count} {props.count >=2?'times':'time'}</h1>
            {/* <h2>{props.counts}</h2> */}
        </div>
    )
}
//this set default therich to count
//  ResultsetState.defaultProps={
//      counts:10
//  }
