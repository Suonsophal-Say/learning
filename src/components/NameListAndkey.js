import React from 'react'


function NameListAndkey() {
    // const Array=['sok','soa','dak'];
    // const list=Array.map((Array,id)=><h1 key={id}>{id} {Array}</h1>)
     const person=[
         {
             id:1,
             name:'Bruce',
             age:30,
             skill:'React'
         },
         {
            id:2,
            name:'clark',
            age:25,
            skill:'Anglar'
        },
        {
            id:3,
            name:'Diana',
            age:28,
            skill:'Vue'
        }
     ]
     const personlist=person.map(person =><h1>{person.name} {person.age} {person.skill}</h1>)
    return (
        <div>
           {/* <h1>{list}</h1> */}
          {personlist} 
        </div>
    )
}

export default NameListAndkey
