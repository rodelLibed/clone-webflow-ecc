import Navbar from "../components/RootLayout/Navbar"
import HeroSection from "../components/RootLayout/HeroSection"

import ComponentSection from "../components/RootLayout/ComponentSection"
import PerformanceSection from "../components/RootLayout/PerformanceSection"
import FeaturesSection from "../components/RootLayout/FeaturesSection"
import InnerPageSection from "../components/RootLayout/InnerPageSection"
import ExternalSection from "../components/RootLayout/ExternalSection"
import Footer from "../components/RootLayout/Footer"

const RootLayout = () => {
  return (
    <div className="root bg-white flex flex-col h-full w-full outline">
      <Navbar/>
      <HeroSection/>
      <ComponentSection/>
      <PerformanceSection/>
      <FeaturesSection/>
      <ExternalSection/>
      <InnerPageSection/>
      <Footer/>

    </div>
  )
}

export default RootLayout
