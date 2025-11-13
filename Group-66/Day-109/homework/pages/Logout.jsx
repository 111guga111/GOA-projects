import { useState } from "react"


function Logout(){
    const [user, setUser] = useState(localStorage.getItem('user') || '')

    setUser('')
    
}


export default Logout