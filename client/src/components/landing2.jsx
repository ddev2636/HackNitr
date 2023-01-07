import React from 'react'

const landing2 = () => {
  return (
    <div className='text-white'>
      <div className='l2 h-36 italic text-center pt-14 text-2xl'>
      Trusted by 100+ Startups and 750+ Investors
      </div>
      <div className='l3 flex flex-row text-center'>
          <div className='l31 flex flex-col'>
              <h1 className='text-3xl pb-5 font-semibold'>For Startups</h1>
              <p className='text-lg px-40'>Register your startup in Seedy to attract investors for your budding venture.Get started!</p>
              <button class="bg-red-600 hover:bg-red-300 ml-36 text-white font-semibold hover:text-white py-2 w-80 mt-7 hover:border-transparent rounded">Register as a Startup</button>
              <p className='underline pt-10'>Learn More</p>
          </div>
          <div className='l32 flex flex-col'>
          <h1 className='text-3xl pb-5 font-semibold'>For Investors</h1>
              <p className='text-lg px-40 '>Register as an investor and invest in emerging startups and build your investment portfolio</p>
              <div className='text-center '>
              <button class="bg-blue-900 hover:bg-blue-300  text-white font-semibold hover:text-white py-2 w-80  mt-7 hover:border-transparent rounded">Register as a Startup</button>
              <p className='underline pt-10'>Learn More</p>
              </div>
          </div>
      </div>
    </div>
  )
}

export default landing2