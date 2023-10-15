import React from 'react'
import { card } from '../assets'

const CardDeal = () => (
  <div className='flex justify-center items-center text-white'>
    <div className='card-deal flex'>
      <div className="right-deal p-5 flex flex-col justify-center items-center h-600px ">
        <h1 className='mt-3 mb-3 text-5xl'>Find a better card deal in few easy steps.</h1>
        <p className='mt-5 mb-5 text-slate-400 text-3xl'>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
        <button className='text-black px-8 py-4 bg-green-200 rounded-lg mt-5'>Get Started</button>
      </div>
      <div className="left-deal p-5 flex justify-center items-center flex-col h-600px">
        <img src={card} alt="" className='h-[400px] w-[400px]'/>
      </div>
    </div>
  </div>
)

export default CardDeal