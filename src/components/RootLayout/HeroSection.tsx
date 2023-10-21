import Hero from "../../assets/hero.png"

const HeroSection = () => {
  return (
    <div className="bg-black ">
       <div className="flex flex-col justify-center items-center mt-20 gap-11 ">
             <h1 className="text-white text-5xl text-center font-[1000] leading-snug md:text-6xl 
             lg:text-7xl ">Landing Page  Webflow Template</h1>
             <p className="text-white text-lg">5 Landing Pages. 16 Inner Pages.</p>
             <img src={Hero} alt="" className=" object-cover w-full h-full px-5 md:px-20" />
       </div>
    </div>
  )
}

export default HeroSection
