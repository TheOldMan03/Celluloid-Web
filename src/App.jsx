import React from "react"
import Navbar from "./components/navbar"
import Hero from "./components/hero"


function App() {
  return (

    <div className="bg-white w-screen h-screen text-black">
      {/* This is the main div */}
      <Navbar/>
      <Hero/>

      <div className="w-screen bg-[#3a3636] h-1/6 absolute bottom-0 text-white flex items-center">
        {/* This is the footer */}
        
        <div className="ml-24 font-medium text-lg">
          Celluloid
        </div>

        <div className="flex flex-col mx-auto">
          Hello
        </div>


      </div>


    </div>
  )
}

export default App
