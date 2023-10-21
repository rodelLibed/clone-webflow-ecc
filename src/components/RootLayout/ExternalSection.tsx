import IMAGES from "@/images/Images"
import { AiOutlineEye } from "react-icons/ai"

const ExternalSection = () => {
   
  return (
    <div className=" bg-white">
        <div className="text-center p-8 md:p-20 lg:px-56">
            <h1 className="text-4xl md:text-6xl font-medium">Inner Pages</h1>
            <p className="mt-5 text-lg text-gray-600 font-medium">
               Limitless potential in creating the pages you need. We’ve created
               essential page layouts including: Contact Us, Products Details,
               Pricing, and more.
            </p>
        </div>
        <div className="mx-5 grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-4 gap-5">
           {IMAGES.map((img)=>{
               return (
                 <div className="group relative hover:bg-teal-600 p-2 hover:opacity-75 transition-opacity duration-300 ease-in-out">
                      <img src={img.image} alt="" className='object-cover ' />
                      <div className='absolute bg-black  px-2 py-2 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out '>
                            <AiOutlineEye className="text-white text-center text-4xl "/>
                      </div>
                      <div className='py-3 '>
                          <h1 className='text-2xl text-black text-center group-hover:text-white font-semibold'>{img.name}</h1>
                       </div>
                 </div>
               
               )
           })}
        </div>
    </div>
  )
}

export default ExternalSection
