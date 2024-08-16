import { createContext, useEffect, useState } from "react";
import { collection } from "../assets/assets";
import { featuredItems } from "../assets/assets";

export const StoreContext = createContext(null)

const storeContextProvider = (props) =>{

    const [cart, setCart] = useState({});

    const add = (id) =>{
        if(!cart[id] ){
            setCart((prev)=>({...prev,[id]:1}))
        }
        else if (cart[id]<10){
            setCart((prev)=>({...prev,[id]:prev[id]+1 }))
        }
    }

    const remove = (id) =>{
        setCart((prev)=>({...prev,[id]:prev[id]-1}))
    }

    const totalCol = () =>{
        let amount1 = 0;

        for(const item in cart){
            if (cart[item] > 0){    
                let info1 = collection.find((product) => product.id === parseInt(item));
                if(info1 !== undefined){
                    amount1 += info1.new_price * cart[item];
                }
            }
            
        }
        return amount1;
    }

    const totalFeat = () =>{
        let amount1 = 0;

        for(const item in cart){
            if (cart[item] > 0){    
                let info1 = featuredItems.find((product) => product.id === parseInt(item));
                if(info1 !== undefined){
                    amount1 += info1.new_price * cart[item];
                }
            }
            
        }
        return amount1;
    }

    const contextValue = {
        featuredItems,
        collection,
        cart,
        setCart,
        add,
        remove,
        totalCol,
        totalFeat,
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default storeContextProvider