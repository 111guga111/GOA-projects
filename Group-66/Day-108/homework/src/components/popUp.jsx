import { useContext, useState } from "react";
import { confirmContext } from "../Contexts/confirmContext";
import check from '../assets/images/icon-order-confirmed.svg'
import { cartContext } from "../Contexts/cartAddContext";

function PopUp(){
    const [done, setDone] = useState(false)
    const {popUp} = useContext(confirmContext)
    const {cart,setCart,setCount} = useContext(cartContext)
    
    
    
    const over = () =>{
        setDone(!done) 
    }

    return(<>
    
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
            {done?
                <section className="flex flex-col justify-center gap-5 lg:w-[600px] p-10 bg-white rounded-2xl">
                    <div className="flex flex-col gap-1">
                        <img className="w-10 h-10 mb-4" src={check} />
                        <h1 className="font-bold text-5xl">Order Confirmed</h1>
                        <p className="text-[#ae8b87]">We hope you enjoy your food!</p> 
                    </div>
                    <div className=" flex flex-col items-center w-[450px] mx-auto">
                        <ul className="flex flex-col items-center w-full">
                                
                            {cart.map((item, i) => {return(
                        
                                <li key={i} className=" py-5 flex justify-between items-center w-full border-b-[#f4edeb] border-b">
                                    <div className="flex w-full justify-between items-center gap-1">
                                        <div className="flex gap-3">
                                            <img className="w-[50px] h-[50px]" src={item.image.thumbnail} />
                                            <div className="flex flex-col">
                                                <h1>{item.name}</h1>
                                                <div className="flex gap-3">
                                                    <h1 className="text-[#c73a0f]">{item.amount}x</h1>
                                                    <h1 className="text-[#baa5a8]">@${(item.price).toFixed(2)}</h1>
                                                </div>
                                            </div>
                                        </div>
                                        <h1 className="font-bold">${(item.price * item.amount).toFixed(2)}</h1>
                                    </div>
                                                        
                                </li>
                                                
                                )})
                            }
                        </ul>

                        <div className="flex w-full justify-between items-center py-5">
                            <h1 className="text-[17px]">Order Total</h1>
                            <h1 className="text-[25px] font-bold">${(cart.reduce((acc,cur)=> acc + (cur.price * cur.amount), 0)).toFixed(2)}</h1>
                        </div>
                    </div>
                    <button className="h-[50px] w-full bg-[#c73a0f] rounded-full text-white text-[20px] hover:bg-[#cb4921] cursor-pointer" onClick={()=>{popUp(),setCart([]),setCount(0)}}>Start new order</button>
                </section>
                :
                <section className="flex flex-col justify-center items-center gap-10 w-[600px] h-[250px] bg-white rounded-2xl">
                    <h1 className="font-bold text-4xl">Are you sure with your order?</h1>
                    <div>
                        <button className="h-[50px] w-[200px] bg-[#c73a0f] rounded-full text-white text-[20px] hover:bg-[#cb4921] cursor-pointer" onClick={over}>Yes</button> 
                        <button className="h-[50px] w-[200px] bg-white border border-[#bda09d] rounded-full  text-[20px] hover:bg-[#f0f0f0] cursor-pointer" onClick={popUp}>No</button>
                    </div>
                </section>
            }
        </div>

    </>)
}


export default PopUp;