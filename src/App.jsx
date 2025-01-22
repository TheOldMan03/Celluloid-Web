import React from "react"
import Navbar from "./components/navbar"
import ButtonCard from "./components/buttonCard"
import herobg from "./assets/hero-bg.jfif"
import hero1 from "./assets/hero1.png"
import hero2 from "./assets/hero2.png"

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

        <div className="z-20 flex flex-col mx-auto">
          <div className="mt-4">
            <p className="font-medium text-3xl">Experience Script Writing</p><p className="font-medium text-3xl text-center">Like Never Before</p>
          </div>

          <div className="mt-12">
            <p className="font-medium text-lg">Effortlessly craft compelling movie scripts</p><p className="font-medium text-lg text-center">with our powerful AI</p>
          </div>

          <div className="mx-auto mt-12">
            <ButtonCard text="Get Started With Ai"/>
          </div>

        </div>

        <div className="my-32 mr-16">
          <img src={hero2} alt="" className="z-10 relative w-60 h-64" />
        </div>



      </div>


    </div>
  )
}

export default App
