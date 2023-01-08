import React from 'react'
import './land.css'
import bg from '../../assets/bg.jpg'
const landing = () => {
  return (
    <div className="home text-white py-[450px] w-[100vw] h-[100vh]">
      <div className='bgImg -z-10 absolute '>
        <img src={bg} alt="" />
      </div>
      <div className="text-2xl pb-4 pt-10 pl-10 ">Welcome to Seedy!</div>
      <div className="h ">Where Investors </div>
<div className="h">meet Startups</div>
      <div className="text-xl pl-10 pt-5">Register yourself as a startup or an investor </div>
      <div className="text-xl pl-10">and join the global network of founders. </div>
      <button className="bg-red-600 hover:bg-red-300 text-white font-semibold hover:text-white py-2 px-4 ml-10 mt-7  border-white border-2 hover:border-transparent rounded">Get Started</button>
</div>
  )
}
export default landing;