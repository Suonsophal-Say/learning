import React,{useState} from 'react'

function HookCounterThree() {
    const [name, setName] = useState({firstName:'',LastName:''})
    return (
        <div>
            <input tye='text' value={name.firstName} onChange={Event=>setName({firstName: Event.target.value})}/>
            <input type='text'value={name.LastName} onChange={Event=> setName({LastName: Event.target.value})}/>
            <h1>First Name: {name.firstName}</h1>
            <h1>Last Name: {name.LastName}</h1>
            <h1>{JSON.stringify(name)}</h1>



        </div>
    )
}

export default HookCounterThree
