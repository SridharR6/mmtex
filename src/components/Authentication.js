import React, { useContext, useState } from "react";

const authContext = React.createContext();

export const AuthenticationProvider = (props)=>{
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [adminLoggedIn, setAdminLoggedIn] = useState(false);
    const [dbConnect, setDbConnect] = useState(false);
    
    return(

        <>
            <authContext.Provider value={{userLoggedIn, setUserLoggedIn, dbConnect, setDbConnect, adminLoggedIn, setAdminLoggedIn}}>
                {props.children}
            </authContext.Provider>
        </>
    );
}

export const useAuth = ()=>useContext(authContext);