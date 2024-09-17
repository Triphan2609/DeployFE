import { createContext, useState } from "react";

export const AuthContext = createContext({ PT: "" });

export const AuthWrapper = (props) => {
    const [user, setUser] = useState({ PT: "" });
    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {props.children}
        </AuthContext.Provider>
    );
};
