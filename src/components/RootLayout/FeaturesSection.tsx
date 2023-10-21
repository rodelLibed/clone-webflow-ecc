import { BsHeadphones, BsBoxArrowUpRight } from "react-icons/bs"
import { AiFillThunderbolt,  } from "react-icons/ai"
import {FaArrowsAltV, FaSortAlphaUp} from "react-icons/fa"
import {SiPowerpages} from "react-icons/si"
import {CgMenuGridR} from "react-icons/cg"

const FeaturesSection = () => {
  return (
    <div className=" bg-black lg:px-20 lg:py-20">
         
          <h1 className="text-white text-center text-4xl lg:text-5xl font-medium p-14">Key Features</h1>
         
       <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 ">
             
           <div className="flex flex-col items-center gap-5  text-center p-4 lg:p-5">
               <div className="bg-gray-500 bg-opacity-20 p-3 rounded-lg shadow-lg">
                   <BsHeadphones className="text-teal-600 text-2xl" />
                </div>

               <h1 className="text-white text-2xl  font-medium  ">Friendly Support</h1>
               <p className="text-white  font-medium">You get six months of user support with the option to extend this period, if desired.</p> 
           </div>

           <div className="flex flex-col items-center gap-5  text-center p-4 lg:p-5">
               <div className="bg-gray-500 bg-opacity-20 p-3 rounded-lg shadow-lg">
                   <AiFillThunderbolt className="text-teal-600 text-2xl" />
                </div>
               <h1 className="text-white  text-2xl font-medium  ">Search Engine Optimised</h1>
               <p className="text-white font-medium  ">Get ranking in SERPs. Template is optimised for search engines requirements.</p> 
           </div>

           <div className="flex flex-col items-center gap-5   text-center p-4 lg:p-5">
               <div className="bg-gray-500 bg-opacity-20 p-3 rounded-lg shadow-lg">
                   <FaArrowsAltV className="text-teal-600 text-2xl" />
                </div>
               <h1 className="text-white  text-2xl font-medium ">Custom Typography</h1>
               <p className="text-white  font-medium ">Template allows you to adjust Typography and choose custom Colors to suit your needs.</p> 
           </div>

           <div className="flex flex-col items-center gap-5    text-center p-4 lg:p-5">
               <div className="bg-gray-500 bg-opacity-20 p-3 rounded-lg shadow-lg">
                   <SiPowerpages className="text-teal-600 text-2xl" />
                </div>
               <h1 className="text-white  text-2xl font-medium ">Essential Inner pages</h1>
               <p className="text-white  font-medium">Limitless potential in creating the pages you need. We’ve created essential page layouts including: About, Pricing, Contact, and more.</p> 
           </div>

           <div className="flex flex-col items-center gap-5   text-center p-4  lg:p-5">
               <div className="bg-gray-500 bg-opacity-20 p-3 rounded-lg shadow-lg">
                   <FaSortAlphaUp className="text-teal-600 text-2xl" />
                </div>
               <h1 className="text-white  text-2xl font-medium">Modern Technologies</h1>
               <p className="text-white  font-medium">Template is well designed and highly targeted for conversions. Built with HTML, CSS, and Javascript in a visual canvas.</p> 
           </div>

           <div className="flex flex-col items-center gap-5   text-center p-4  lg:p-5">
               <div className="bg-gray-500 bg-opacity-20 p-3 rounded-lg shadow-lg">
                   <BsBoxArrowUpRight className="text-teal-600 text-2xl" />
                </div>
               <h1 className="text-white  text-2xl font-medium">High-Speed Performance</h1>
               <p className="text-white  font-medium">Load your site with a lightning-fast responsiveness. An optimized code lets template load fast under any traffic conditions.</p> 
           </div>

           <div className="flex flex-col items-center gap-5   text-center p-4  lg:p-5">
               <div className="bg-gray-500 bg-opacity-20 p-3 rounded-lg shadow-lg">
                   <BsBoxArrowUpRight className="text-teal-600 text-2xl" />
                </div>
               <h1 className="text-white  text-2xl font-medium">Lifetime Updates</h1>
               <p className="text-white  font-medium">Stay up-to-date with the latest version of our template without having to do it manually.</p> 
           </div>

           <div className="flex flex-col items-center gap-5   text-center p-4  lg:p-5">
               <div className="bg-gray-500 bg-opacity-20 p-3 rounded-lg shadow-lg">
                   <CgMenuGridR className="text-teal-600 text-2xl" />
                </div>
               <h1 className="text-white  text-2xl font-medium">Highly Customisable</h1>
               <p className="text-white  font-medium">Make your website look the way you want it to by customising it with our built-in tools and settings - with no coding skills required!</p> 
           </div>
       </div>
    </div>
  )
}

export default FeaturesSection
