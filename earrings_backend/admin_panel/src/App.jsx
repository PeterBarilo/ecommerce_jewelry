import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Add from './pages/Add/Add'
import List from './pages/List/List'
import Orders from './pages/Orders/ORders'


const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="content">
        <Sidebar></Sidebar>
        <Routes>
          <Route path='/add' element={<Add></Add>}></Route>
          <Route path='/list' element={<List></List>}></Route>
          <Route path='/orders' element={<Orders></Orders>}></Route>

        </Routes>
      </div>
    </div>
  )
}

export default App
