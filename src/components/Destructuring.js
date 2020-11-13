import React from 'react'

//one-way
// const Destructuring=(props)=> {
//     const {name, heroname}=props //this only functional
//     const {name, heroname}=this.props //this only class
//     return (
//         <div>
//             <h1>{name} and {heroname}</h1>
//         </div>
//     )
// }

//tow-way
const Destructuring=({name, heroname})=> {
   
    return (
        <div>
            <h1>{name} and {heroname}</h1>
        </div>
    )
}

export default Destructuring
