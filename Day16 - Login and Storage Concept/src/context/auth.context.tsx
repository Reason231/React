import { createContext, useState } from "react";

let AuthContext=createContext({})

export const AuthProvider=({children}:{children:any})=>{
    let [loggedInUser,setLoggedInUser]=useState()

    return(
        <AuthContext.Provider value={{loggedInUser,setLoggedInUser}}>
            {children}
        </AuthContext.Provider>

    )
}

export default AuthContext