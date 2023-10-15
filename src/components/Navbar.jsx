import React from 'react'
import { useState } from 'react'
import { logo, close, menu } from '../assets'
import { navLinks } from '../constants/index'


const Navbar = () => {
  const [Toggle, setToggle] = useState(false)

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <img src={logo} alt="bank_logo" className='w-[124px] h-[32px]' />
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, ind) => (
          <li className={`font-poppins font-normal cursor-pointer text-[16px] ${ind === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white`}>
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>


      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img src={Toggle ? close : menu} alt="" className='w-[28px] h-[28px] cursor-pointer object-contain' onClick={() => {
          setToggle((prev) => !prev)
        }} />
      </div>


      <div className={`${Toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20  right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
        <ul className='list-none flex flex-col justify-end items-center flex-1'>
          {navLinks.map((nav, ind) => (
            <li className={`font-poppins font-normal cursor-pointer text-[16px] ${ind === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white`}>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>


    </nav>
  )
}

export default Navbar