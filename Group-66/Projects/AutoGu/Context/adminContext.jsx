import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";



const AdminContext = createContext();

export const useAdmin = () => useContext(AdminContext)

export const AdminProvider = ({children}) => {
    const [addedCars, setAddedCars] = useState(JSON.parse(localStorage.getItem('addedCars')) || [] )
    const {user} = useAuth();
    useEffect(()=>{
        localStorage.setItem('addedCars', JSON.stringify(addedCars))
    },[addedCars])

    const handleAdminSubmit = (e) => {
        e.preventDefault();
        const form = e.target
        const {brand, model, year, price, imageUrl} = form
        const car = {
            brand:brand.value,
            model:model.value,
            year:year.value,
            price:price.value,
            imageURL:imageUrl.value,
            seller:user.fullname
        }
        setAddedCars([...addedCars, car])
        form.reset();

    }

    const handleRemoveAddedCar = (car) =>{
        const newList = addedCars.filter(addedCar => addedCar.model != car.model )
        setAddedCars(newList)
    }


    return (<>

        <AdminContext.Provider value={{addedCars,handleAdminSubmit,handleRemoveAddedCar }} >
            {children}
        </AdminContext.Provider>
    
    </>) 
}