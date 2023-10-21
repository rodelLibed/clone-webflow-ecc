import { Progress } from "@/components/ui/progress"




const PerformanceSection = () => {



  
  const speedPage = [
    { name: 'Google PageSpeed', percentage: '95%'},
    { name: 'Performance Grade', percentage: '92%'},
    { name: 'PageSpeed Score', percentage: '97%'},
    { name: 'GTmetrix YSlow Score', percentage: '95%'},

  ]
 
  return (
    <div className=" bg-slate-200  ">
       <div className="flex flex-col mx-3 py-10 md:py-14 ">
           <div className="text-center mt-14 md:mx-20 lg:mx-52">
               <h1 className="text-4xl">Ultra Performance</h1>
               <p  className="text-lg text-gray-600 font-medium mt-5">Load your site with a lightning-fast responsiveness.
                 An optimized code lets Deily load fast under any traffic conditions.
               </p>
           </div>

           <div className="md:grid grid-rows-2 grid-flow-col gap-16 lg:px-10">
            {speedPage.map((text, key)=>{
                return (
                  <div key={key} className="mt-10">
                    <div className=" flex justify-between ">
                        <h1 className="text-xl font-semibold">{text.name}</h1>
                        <span className="text-xl font-semibold">{text.percentage}</span>
                    </div>
                    <div className="mt-5">
                      <Progress value={100} />
                    </div>
                  </div>
                )
            })}
             
            </div>
            
        </div>
    </div>
    
  )
}

export default PerformanceSection
