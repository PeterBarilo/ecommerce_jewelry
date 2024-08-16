import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import Featured from '../../components/Featured/Featured'
import Collection from '../../components/Collection/Collection'
import Discount from '../../components/Discount/Discount'
const Home = () => {

  return (
    <div>
      <Header></Header>
      <Featured></Featured>
      <Collection ></Collection>
      <Discount></Discount>
    </div>
  )
}

export default Home
