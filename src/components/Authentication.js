import React, { useContext, useState } from "react";

const authContext = React.createContext();

export const AuthenticationProvider = (props)=>{
    const [loggedIn, setLoggedIn] = useState(false);
    const [dbConnect, setDbConnect] = useState(false);
    
    return(

        <>
            <authContext.Provider value={{loggedIn, setLoggedIn, setCurrUser, currUser,id, setId, dbConnect, setDbConnect}}>
                {props.children}
            </authContext.Provider>
        </>
    );
}

export const useAuth = ()=>useContext(authContext);