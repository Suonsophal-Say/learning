import React from 'react'

//steb 1 Creative Contexts
const UserContext=React.createContext('Say suonsophal')
//steb 2 Provide but when we set parameter to createContext,we don't need to use UserProvider
const UserProvider=UserContext.Provider
//steb 3 Cosumer
const UserCosumer=UserContext.Consumer

export {UserProvider,UserCosumer}
export default UserContext