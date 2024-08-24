import React from 'react'
import Navbar from './components/Nav/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Bag from './pages/bag/Bag'
import Order from './pages/order/Order'
import Footer from './components/Footer/Footer'
function App() {

  

  return (
    <>
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/cart' element={<Bag/>}></Route>
        <Route path='/order' element={<Order/>}></Route>
      </Routes>
    </div>
    <Footer></Footer>
    </>
    
  )
}

export default App
