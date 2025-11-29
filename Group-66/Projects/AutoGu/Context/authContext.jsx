import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";


const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);

    const navigate = useNavigate();

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user]);

    const register = (formData) => {
        const users = JSON.parse(localStorage.getItem('users')) || [];

        if (users.some(user => user.email === formData.email)) {
            alert("User exists!");
            return;
        }

        users.push(formData);
        localStorage.setItem('users', JSON.stringify(users));
        navigate('/login');
    };

    const login = (formData) => {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const foundUser = users.find(user => user.email === formData.email && user.password === formData.password);

        if (!foundUser) {
            alert("Invalid credentials!");
            return;
        }

        setUser(foundUser);
        navigate('/Profile')
    }; 

    const logout = () => {
        navigate('/signin')
        setUser(null)
    }

    const adminRegister = (e)=>{
        e.preventDefault();
        const {adminPass} = e.target

        adminPass.value == 123 && setUser(prev => ({ ...prev, admin:true} ))
        
    }

    return (
        <AuthContext.Provider value={{register, login, logout, adminRegister, user}}>
            {children}
        </AuthContext.Provider>
    )
}
