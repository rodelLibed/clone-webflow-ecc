import logo from "../../assets/2.svg"
import { RiMenu3Fill } from "react-icons/ri"
import { AiOutlineShoppingCart } from "react-icons/ai"
import {  FiArrowUpRight } from "react-icons/fi"
import { Link } from "react-router-dom"



export default function Navbar(){
    
    return (
        <div className="navbar h-[70px] md:h-[90px] flex px-3 flex-wrap justify-between lg:justify-around  items-center  bg-black ">
            <div className="  md:flex-none">
              <img src={logo} alt="" className="h-10" />
            </div>
            <div className="hidden md:flex md:gap-3 lg:gap-10 ">
              
                <Link to="#" className="text-white text-sm lg:text-base">DEMOS</Link>
                <Link to="#" className="text-white text-sm lg:text-base">PRICING</Link>
                <Link to="#" className="text-white text-sm lg:text-base">PRODUCTS</Link>
                <Link to="#" className="text-white text-sm lg:text-base">BLOGS</Link>
                <Link to="#" className="text-white text-sm lg:text-base">CONTACT US</Link>
                <Link to="#" className="text-white text-sm lg:text-base">ALL PAGES</Link>
               
            </div>
            <div className=" flex items-center gap-5 md:gap-1 lg:gap-10 ">

                    <div className="flex">
                    <AiOutlineShoppingCart className="text-white text-2xl hover:text-teal-500"/>
                    <div className="bg-white text-teal-400 rounded-full h-4 w-4 text-center text-xs mt-[-5px]">3</div>
                    </div>
                    <div>
                    <button className="hidden text-white bg-teal-500 rounded-full py-4 px-11 md:flex gap-1 
                    ">SIGN UP<FiArrowUpRight className=" text-xl"/></button>
                    <RiMenu3Fill className="md:hidden text-white text-2xl"/>
                    </div>
                    
            </div>

        </div>
    )
}