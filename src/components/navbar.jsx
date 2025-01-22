import logo from "../assets/mainlogo.png"
import ButtonCard from "./buttonCard"

export default function Navbar(){
    return (
        <>
            <div className="flex justify-between">
                {/* this is navbar */}

                {/* This is the logo */}
                <div className="flex mt-8 ml-12">
                    <img src={logo} alt="Logo" className="w-16 h-14" />
                    <h2 className="text-lg my-auto font-medium text-4xl ml-1">Celluloid</h2>
                </div>

                <div className="flex mt-12 ml-16">
                    <div className="mx-8 text-xl">About Us</div>
                    <div className="mx-8 text-xl">Pricing</div>
                    <div className="mx-8 text-xl">Features</div>
                    <div className="mx-8 text-xl">Blog</div>
                </div>

                <div className="mt-8 mb-4 mr-10">
                    <ButtonCard text="Get Started"/>
                </div>

            </div>

            <hr className="border-black border-1.5 mt-2"/>
        </>
    )
}