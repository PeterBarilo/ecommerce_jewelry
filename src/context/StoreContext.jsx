import { createContext, useEffect, useState } from "react";
import axios from 'axios'

export const StoreContext = createContext(null)

const StoreContextProvider = (props) =>{
    const fetchProducts = async () =>{
        const res = await axios.get(url+'/api/earring/list')
        setCollection(res.data.data)
    }

    useEffect(()=>{
        async function loadData(){
            await fetchProducts()
        }
        loadData()
    },[])

    const [cart, setCart] = useState({});
    const [collection,  setCollection] = useState([])
    const url  = "http://localhost:4000"

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
            console.log(cart[item])
            if (cart[item] > 0){    
                console.log(collection.find((prod) => parseInt(prod._id) === parseInt(item)))

                let info1 = collection.find((prod) => parseInt(prod._id) === parseInt(item))
                if(info1 !== undefined){
                    amount1 += info1.new_price * cart[item];
                }

            }
            
        }
        return amount1;
    }

    const contextValue = {
        collection,
        cart,
        setCart,
        add,
        remove,
        totalCol,
        url,
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider