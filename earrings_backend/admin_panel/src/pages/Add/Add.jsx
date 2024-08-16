import React, { useState } from 'react'
import './Add.css'
import { assets } from '../../assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify'
const Add = ({url}) => {
  const [img, setImg] = useState(false);
  const [data, setData] =useState({
    name: '',
    description:'',
    new_price:'',
    old_price:'',
  })

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData(data=>({...data,[name]:value}))
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("name", data.name)
    formData.append("description", data.description)
    formData.append("new_price", Number(data.new_price))
    formData.append("old_price", Number(data.old_price))
    formData.append("image",img)

    const res  = await axios.post(`${url}/api/earring/add`,formData)
    if(res.data.success){
      setData({
        name: '',
        description:'',
        new_price:'',
        old_price:'',
      })
      setImg(false)
      toast.success(res.data.message)
    }else{
      toast.error(res.data.message)
    }
  }


  return (
    <div className='add'>
      <form className="flex-col" onSubmit={onSubmitHandler}>
        <div className="upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img src={img?URL.createObjectURL(img):assets.cloud} alt="" />
          </label>
          <input onChange={(e)=>setImg(e.target.files[0])}type="file" id="image" hidden required/>
        </div>
      <div className="add-name flex-col">
        <p>Product Name</p>
        <input onChange={onChangeHandler} value={data.name} type="text" name="name" placeholder="Enter Here" />

      </div>
      <div className="add-description flex-col">
        <p>Product Description</p>
        <textarea onChange={onChangeHandler} value={data.description} name="description" rows="6" placeholder='Enter Here' required></textarea>
      </div>
      <div className="add-price">
        <div className="flex-col">
            <p>Sale Price</p>
            <input onChange={onChangeHandler} value={data.new_price} type="number" name="new_price" placeholder="$0" />
        </div>
        <div className="flex-col">

            <p>Original Price</p>
            <input onChange={onChangeHandler} value={data.old_price} type="number" name="old_price" placeholder="$0" />
        </div>
      </div>
      <button type='submit' className='add-button'>ADD</button>
      </form>

    </div>
  )
}

export default Add
