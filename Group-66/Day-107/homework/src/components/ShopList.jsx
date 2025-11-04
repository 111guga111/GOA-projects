import { useContext, useState } from "react";
import { deserts } from "../productsList";
import { cartContext } from "../Contexts/cartAddContext";
import cartIcon from '../assets/images/icon-add-to-cart.svg';
import addIcon from '../assets/images/icon-increment-quantity.svg'
import subtract from '../assets/images/icon-decrement-quantity.svg'

function List(){

    const {cart, HandleAdd, decrease ,increase} = useContext(cartContext);
    

    return(<>

        <ul className=" grid grid-cols-3 w-200 h-200">
            {deserts.map((item, i) => 
                
                <li key={i} className="w-60">
                    <div className=" relative flex justify-center w-100% border-2 h-55 bg-cover bg-center rounded-[5px]" style={{ backgroundImage: `url(${item.image.desktop})`, borderColor: cart.some(c => c.name === item.name) ? '#c73a0f' : 'transparent', }}>
                        {cart.some(c => c.name === item.name) ? 
                            (   
                                
                                <div className="absolute flex justify-between p-5 items-center bottom-0 translate-y-3.5 bg-[#c73a0f] text-white w-[150px] h-[45px]  text-[17px] rounded-4xl">
                                    
                                    <button className="flex h-5 w-5 font-bold border border-white justify-center items-center pointer rounded-4xl hover:border-[#f0f0f0] hover:text-[#f0f0f0] cursor-pointer" onClick={() => decrease(item)}>
                                        <img src={subtract} />
                                    </button>


                                    <h1>{cart.find(c => c.name === item.name)?.amount}</h1>
                                    <button className="flex  h-5 w-5 font-bold border border-white justify-center items-center pointer rounded-4xl hover:border-[#f0f0f0]  cursor-pointer" onClick={() => increase(item)}>
                                        <img src={addIcon} />
                                    </button>
                                </div>
                            )
                            : 
                            <button
                                className="absolute flex justify-center items-center bottom-0 translate-y-3.5 bg-white w-[150px] h-[45px] border border-[#ad8985] cursor-pointer hover:bg-[#f0f0f0] text-[17px] gap-0.5 rounded-4xl"
                                onClick={() => HandleAdd(item)}
                            >
                                <img src={cartIcon} /> Add to Cart
                            </button>
                        
                        }
                    
                    
                    </div>
                    
                    <div className="flex flex-col gap-0.1 py-5">
                        <p className="text-[#ad8a85]">{item.category}</p>
                        <h1 className="text-[17px] font-bold">{item.name}</h1>
                        <h1 className="text-[#c73a0f] text-[18px]">${(item.price).toFixed(2)}</h1>
                    </div>     
                </li>)
            }
        </ul>
      
    </>)
} 

export default List;