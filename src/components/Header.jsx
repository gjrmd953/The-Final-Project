import React, { useState } from 'react'
import Container from './Container'
import logo from "../assets/logo.png"
import Flex from './Flex'
import { FaBars } from 'react-icons/fa'
import { RxCross2 } from 'react-icons/rx'

const Header = () => {
    let [show, setshow] = useState(false)
    return (
        <>
            <header className={`lg:py-6 ${show ? "mb-0": "mb-8 lg:mb-0"}`}>

             <Container>
                <Flex className="items-center">
                    <div className="w-1/3">
                        <div className="">
                            <img src={logo} alt="" />
                        </div>
                    </div>
                    <div className="w-full lg:w-2/3">
                    
                        <ul className={`lg:flex justify-end gap-x-6 mt-2 duration-300 ease-in-out ${show == true ? "bg-green-500 mt-0 w-full" :  "mt-[-160px] lg:mt-0"}`}>

                            <li><a className='font-Dms text-[14px] text-[#767676] hover:text-[#262626] font-bold duration-300 ease-in-out text-capitalize' href="#">Home</a>
                            </li>

                            <li><a className='font-Dms text-[14px] text-[#767676] font-normal hover:text-[#262626] duration-300 ease-in-out text-capitalize' href="#">Shop</a>
                            </li>

                            <li><a className='font-Dms text-[14px] text-[#767676] font-normal  hover:text-[#262626] duration-300 ease-in-out text-capitalize' href="#">About</a>
                            </li>

                            <li><a className='font-Dms text-[14px] text-[#767676] font-normal  hover:text-[#262626] duration-300 ease-in-out text-capitalize' href="#">Contacts</a>
                            </li>

                            <li><a className='font-Dms text-[14px] text-[#767676] font-normal  hover:text-[#262626] duration-300 ease-in-out text-capitalize' href="#">Journal</a>
                            </li>

                        </ul>
                    </div>
                    <div className="lg:hidden absolute top-2 right-2" onClick={()=>setshow(!show)}>
                        {show ? <RxCross2 /> : <FaBars />}
                        
                        
                    </div>
                </Flex>
             </Container>
            </header>
        </>
    )
}

export default Header