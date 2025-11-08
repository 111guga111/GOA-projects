
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const register = (formData) => {
        const users = JSON.parse(localStorage.getItem('users')) || [];

        if (users.some(user => user.email === formData.email)) {
            alert("User exists!");
            return;
        }

        users.push(formData);
        localStorage.setItem('users', JSON.stringify(users));
    };

    const login = (formData) =>{
        const users = JSON.parse(localStorage.getItem('users')) || [];

        if (users.some(user => ((user.email === formData.email) && (user.password === formData.password)))) {
            alert("User exists!");
        }

        setUser(formData)
    }
    return (
        <AuthContext.Provider value={{register, login}}>
            {children}
        </AuthContext.Provider>
    )
}