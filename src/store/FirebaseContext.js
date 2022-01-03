import { createContext, useState } from "react";

export const FirebaseContext = createContext(null)
//this context must be imported in Index.js. then it wrapped in it

//another way to create context

export const AuthContext = createContext(null)

export default function Context ({children}){   //children is a destructured props
    const [users,setUsers] = useState('')
    return(
        <AuthContext.Provider value={{users,setUsers}}>
            {children}
            
        </AuthContext.Provider>
       

    )
    
}

// then wrap this context to index.js