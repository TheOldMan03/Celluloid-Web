import React from "react"
import Navbar from "./components/navbar"
import herobg from "./assets/hero-bg.jfif"
import hero1 from "./assets/hero1.png"

function App() {
  return (

    <div className="bg-white w-screen h-screen text-black">
      {/* This is the main div */}
      <Navbar/>

      <div className="w-screen h-[80%] flex absolute">
      {/* This is the hero section */}

        <div className="my-32 ml-12">
          <img src={hero1} alt="" className="z-10 relative w-60 h-64 rotate-[-24deg]" />
        </div>

        <img src={herobg} alt="" className="w-screen h-4/5 absolute z-0"/> 

        <div className="z-20 flex flex-col mx-auto border-2 border-black">
          <div>
            Experience Script Writing Like Never Before
          </div>
        </div>

        <div className="my-32 mr-12">
          <img src={hero1} alt="" className="z-10 relative w-60 h-64 rotate-[-24deg]" />
        </div>


      </div>


    </div>
  )
}

export default App
