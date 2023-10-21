
 //icons
import { AiOutlineEye } from 'react-icons/ai'
 //images
import Image1 from '../../assets/1.jpg'
import Image2 from '../../assets/2.jpg'
import Image3 from '../../assets/3.jpg'
import Image4 from '../../assets/4.jpg'
import Image5 from '../../assets/5.jpg'



const ComponentSection = () => {

  interface Images {
     name: string,
     img: string
  }

  const images : Images[] = 
  [
      { name: "Home 1", img: Image1},
      { name: "Home 2", img: Image2},
      { name: "Home 3", img: Image3 },
      { name: "Home 4", img: Image4},
      { name: "Home 5", img: Image5 }
  ]

  return (

    
    <div >
       <div className='bg-white'>
          <div className="p-10 flex  flex-col justify-center items-center">
             <h1 className='text-4xl md:text-5xl'>5 Pre-Built Ready Demos</h1>
             <p className='mt-5  text-gray-600 font-medium text-lg text-center'>Every of our demos is unique and has different elements that are interchangeable between demos</p>
          </div>
          <div className="mx-5 flex flex-col flex-wrap justify-center items-center md:flex-row ">
               {images.map((image, key)=>{
                  return (
                    <div key={key} className='group relative hover:bg-teal-600 p-2 hover:opacity-75 transition-opacity duration-300 ease-in-out md:w-1/3 '>
                        <img src={image.img} alt="" className='object-cover  '/>
                         <div className='absolute bg-black  px-2 py-2 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                         opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out '>
                           <AiOutlineEye className="text-white text-center text-4xl "/>
                         </div>
                       <div className='py-3'>
                          <h1 className='text-2xl text-black text-center group-hover:text-white font-medium'>{image.name}</h1>
                       </div>
                    </div>
                  )
               })}
          </div>
       </div>
    </div>
  )
}

export default ComponentSection
