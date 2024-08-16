import React, { useEffect, useState } from 'react'
import './List.css'
import axios from 'axios'
import { toast } from 'react-toastify'
const List = ({url}) => {
  const [list, setList] = useState([])

  const getList = async ()=>{
    const res = await axios.get(`${url}/api/earring/list`)
    console.log(res.data)
    if(res.data.success){
      setList(res.data.data)
    } else{
      toast.error("Error Fetching List")
    }
  }

  useEffect(()=>{
    getList()
  },[])


  const remove = async (productId) => {
    const res = await axios.post(`${url}/api/earring/remove`, {id:productId})
    await  getList();
    if(res.data.success){
      toast.success("Product Successfully Removed")
    }else{
      toast.error("Failed to Remove Product")
    }
  }

  return (
    <div className='list add flex-col'>
      <p>Products List</p>
      <div className="table">
        <div className="format title">
            <b>Image</b>
            <b>Name</b>
            <b>New Price</b>
            <b>Old Price</b>
            <b>Action</b>
        </div>
        {list.map((item, index)=>{
            return(
              <div key={index} className='format'>
                  <img src={`${url}/images/${item.image}`} alt="" />
                  <p>{item.name}</p>
                  <p>${item.new_price}</p>
                  <p>${item.old_price}</p>
                  <p onClick={()=>remove(item._id)} className='x'>x</p>
              </div>
            )
        })}
      </div>
    </div>
  )
}

export default List
