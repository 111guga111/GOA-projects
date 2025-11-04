import { useContext } from "react"
import { cartContext } from "../Contexts/cartAddContext"
import cake from "../assets/images/illustration-empty-cart.svg"
import cartIcon from '../assets/images/icon-carbon-neutral.svg'
import x from '../assets/images/icon-remove-item.svg'
import { confirmContext } from "../Contexts/confirmContext"
import PopUp from "./popUp"

function CartList(){
    
    const {cart, count, handleRemove} = useContext(cartContext)
    const {popUp, pop} = useContext(confirmContext) 

    return(    
        <div>  
            <ul className="flex flex-col items-center w-85">
                {count == 0 ? <li key={'first'} className=" flex flex-col items-center text-[#ad8a85] mt-15"><img src={cake} /><p>Your added items will appear here</p></li>: '' }
                
                {cart.map((item, i) => {return(

                        <li key={i} className=" py-5 flex justify-between items-center w-full border-b-[#f4edeb] border-b">
                            <div className="flex flex-col gap-1">
                                <h1>{item.name}</h1>
                                <div className="flex gap-3">
                                    <h1 className="text-[#c73a0f]">{item.amount}x</h1>
                                    <h1 className="text-[#baa5a8]">@${(item.price).toFixed(2)}</h1>
                                    <h1 className="text-[#baa5a8] font-bold">${(item.price * item.amount).toFixed(2)}</h1>
                                </div>
                            </div>
                            <button className="flex  h-5 w-5 font-bold border border-[#bfa399] cursor-pointer justify-center items-center pointer rounded-4xl" onClick={()=>{handleRemove(item)}}><img src={x} /></button>
                                    
                        </li>
                        
                )}

                    )
                }
            </ul>
            {count != 0 &&
                <section className="py-5">
                    <div className="flex justify-between items-center">
                        <h1 className="text-[17px]">Order Total</h1>
                        <h1 className="text-[25px] font-bold">${(cart.reduce((acc,cur)=> acc + (cur.price * cur.amount), 0)).toFixed(2)}</h1>
                    </div>

                    <div className="flex gap-1 justify-center items-center mt-10"><img src={cartIcon} /><h1 className="text-center text-[17px]">This is a <span className="font-bold" >carbon neutral</span> delivery</h1></div>
                    <button className="h-13 w-full bg-[#c73a0f] rounded-full text-white text-[20px] mt-10 cursor-pointer hover:bg-[#cb4921] " onClick={popUp}>Comfrim Order</button>
                </section>
            }
            
            {pop && <PopUp />} 
        </div>
        
    )
}

export default CartList;

