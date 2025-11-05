import { createContext, useState } from "react";
export const authContext = createContext()

function AuthProvider({children}){

    const [user,setUser] = useState(null)
    const [acc, setAcc] = useState([])
    const [err, setErr] = useState([])
    
    const signUp = (user,email,password,Confirm) =>{
        setErr([]);
        user = user.trim()
        email = email.trim()
        password = password.trim()
        Confirm = Confirm.trim()
        let problems = []

        const account = {}

        

        if (acc.find(ac => ac.name === user )){
            problems = [...problems, 'name already exist' ]
        }

        if (acc.find(ac => ac.email === email )){
            problems = [...problems, 'Email already exist' ]
        }

        if (password != Confirm){
            problems = [...problems, 'make sure password matches confrim password' ]
        }

        if (!(user.length > 0 && user.length < 10 )){
            problems = [...problems, 'make sure name length is more then 0 and less then 10' ]
        }else{
            account.name = user
        }
        if (!(email.length > 0)){
            problems = [...problems, 'make sure email length is more then 0' ]
        }else{
            account.email = email
        }
        if (!(password.length > 0 && password.length <= 10 )){
            problems = [...problems, 'make sure password length is more then 0 and less then 10' ]
        }else{
            account.password = password
        }

        setErr(problems)

        if (err.length === 0){
            setAcc([...acc,account])
            const list = JSON.stringify(localStorage.getItem('accounts')) || []
            localStorage.setItem('accounts',[...list, {[account.name]:account}])
        }

        
    }
    const login = () =>{
        
    }
    const logout = () =>{
        
    }

    return(<>
    
        <authContext.Provider value={{ user, signUp, login, logout, err }}>
            {children}
        </authContext.Provider>
    
    </>)
}


export default AuthProvider;