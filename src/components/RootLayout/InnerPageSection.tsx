import { ImDownload } from "react-icons/im"

const InnerPageSection = () => {
  return (
    <div className="bg-black h-[100vh] flex justify-center items-center mt-20">
         <div className=" bg-zinc-800 opacity-90 flex flex-col justify-center items-center lg:flex-row  gap-10 lg:gap-32 w-full p-10 lg:p-28">
               <div className="text-center">
                  <h1 className="text-3xl text-white text-center font-medium opacity-90">Balance of External and Internal Beauty</h1>
                  <p className="text-white font-semibold opacity-90 mt-5">Start building your next gorgeous website now.</p>
               </div>
               <div>
                  <button className="text-white text-xl bg-teal-500 rounded-full py-5 px-9 hover:bg-blue-400 font-medium flex items-center gap-2"><ImDownload/>Purchase</button>
               </div>
         </div>
    </div>
  )
}

export default InnerPageSection
