import { useState, createContext } from "react";
import ReactDOM from "react-dom";
function ComponentToPractise{
const UserContext = createContext()
const [user,setUser] = useState("Hesse Hall");

return(
    <UserContext.Provider value={user}>
        < AnyComponent user={user} />
    </UserContext.Provider>
    
);
}