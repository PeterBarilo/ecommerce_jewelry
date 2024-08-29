import React, { useContext, useEffect } from 'react'
import './verify.css'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';

const Verify = () => {
    const [params, setParams] = useSearchParams();
    const success = params.get("success")
    const orderId = params.get("orderId")
    
    const {url} = useContext(StoreContext)
    const nav =useNavigate()

    const verifyPaid = async () =>{
        const res = await axios.post(url+"/api/order/verify",{success,orderId})
        if(res.data.success){
            console.log(res)
            nav("/confirmation")
        }
        else{
            nav("/")
        }
    }

    useEffect(()=>{
        verifyPaid();
    },[])

  return (
    <div className='verify'>
        <div className="spin">

        </div>
    </div>
  )
}

export default Verify
