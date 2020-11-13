import React,{useState,useCallback} from 'react'
import Button from './Button'
import Count from './Count'
import Title from './Title'

function ParentComponent() {
    const [age, setAge]=useState(25)
    const [salary, setSalary]=useState(50000)

    const handlechangeage=useCallback(()=>{
        setAge(age+1)
    },[age])
    const handlechangesalary=useCallback(()=>{
        setSalary(salary+1000)
    },[salary])
    return (
        <div>
            <Title />
            <Count text='Age' count={age} />{/*parentfunction take parametter to childrenfunction for showing*/}
            <Button hanldClick={handlechangeage}>Change Age</Button>
            <Count text='salary' count={salary} />
            <Button hanldClick={handlechangesalary}>Change Salary</Button>
        </div>
    )
}

export default ParentComponent
