import React from 'react'
import { bill, apple, google } from '../assets'

const Billing = () => (
  <div className='flex justify-center items-center font-poppins'>
    <div className='text-white billing flex '>
      <div className="left-bill ">
        <img src={bill} alt="" />
      </div>
      <div className="right-bill p-4 flex justify-center items-center flex-col">
        <h1 className='text-3xl mt-3 mb-3'>Easily control your billing & invoicing.</h1>
        <p className='text-slate-400 mt-5 text-2xl'>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
        <div className='flex mt-5'>
        <img src={apple} alt="" />
        <img src={google} alt="" />
        </div>
      </div>
    </div>
  </div>
)

export default Billing