import { useContext } from "react";
import { authContext } from "../Provider/authProvider";

function Profile(){
    const {user,signUp,login,logout} = useContext(authContext)

    
}


export default Profile;