import React from 'react'
import Header from '../components/Header'
import TopDoctors from '../components/TopDoctors'
import Banner from '../components/Banner'
import Chatbot from './chatbot'
const Home = () => {
  return (
    <div>
      <Header />
      <Chatbot/>
      <TopDoctors />
      <Banner />
    </div>
  )
}

export default Home