import React from 'react'
import { discount, robot } from '../assets'

const Hero = () => (

  <section className='text-white mt-10 '>
    <div className='  flex hero'>
      <div className="leftHero  p-5">
        <div className='flex items-center'>
          <img src={discount} alt="discount" className='h-[32px] w-[32px]' /> <span>20% DISCOUNT FOR 1 MONTH ACCOUNT</span>
        </div>
        <h1 className='font-poppins text-5xl mt-10 mb-10'>The Next <br /> <span className='text-gradient'>Generation</span> <br /> Payment Method.</h1>

        <p className='mt-5'>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. <br />
          We examine annual percentage rates, annual fees.</p>

      </div>
      <div className='rightHero flex justify-center items-center p-5'>
        <img src={robot} alt="robot hand" className='h-[400px]' />
      </div>
    </div>
  </section>

)

export default Hero