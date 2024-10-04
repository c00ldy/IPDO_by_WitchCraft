import { createContext, useEffect, useState } from "react";
export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {
    
    const url = "http://localhost:3000"
    const [token, setToken] = useState("")
    const [showLogin,setShowLogin] = useState(false)

 
    useEffect(()=>{
        async function loadData() {
            if(localStorage.getItem("token")){
                setToken(localStorage.getItem("token"));
            }   
        }
        loadData();
    },[])
    const contextValue = {
        url,
        token,
        setToken,
        showLogin,
        setShowLogin
    }

    return ( 
        <StoreContext.Provider value={contextValue} >
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider