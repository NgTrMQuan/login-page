import { useState, createContext } from "react";

const UserContext = createContext();

const UserProvider = ({children}) => {
    const [username, setUserName] = useState("");

    const value = {username: username, setUsername: setUserName};

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
}

export {UserContext, UserProvider};