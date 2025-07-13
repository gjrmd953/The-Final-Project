import React from 'react'
import Container from './Container'
import Flex from './Flex'
import { HiBars3BottomLeft } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";
import { FaShoppingCart } from "react-icons/fa";






const Navbar = () => {

  return (
    <nav className={`bg-[#F5F5F3] py-2 lg:mt-0`}>
        <Container>
          <Flex className="items-center">
              <div className="w-1/4">
              <div className="flex items-center gap-2">
                <div className="">
                    <HiBars3BottomLeft className='cursor-pointer' />
                </div>
                <h3 className='font-Dms text-[14px] text-[#262626] font-normal'>Shop by Category</h3>
              </div>
              </div>
              <div className="w-2/4">
              <div className="relative">
                <input type="text" placeholder="Search..." className='w-full bg-white py-3 pl-2 focus:outline-none' />
                <div className="absolute right-2 top-[50%] translate-y-[-50%]">
                    <FaSearch/>
                </div>
              </div>
              </div>
              <div className="w-1/4">
              <div className="flex justify-end gap-x-3">
                    <div className="flex">
                        <FaUser className='cursor-pointer' />
                    <TiArrowSortedDown className='cursor-pointer' />
                    </div>
                    <FaShoppingCart className='cursor-pointer' />
              </div>
              </div>
          </Flex>
         </Container>
    </nav>
  )
}

export default Navbar