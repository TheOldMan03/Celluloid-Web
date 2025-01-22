export default function ButtonCard({text}){
    return(
        <button className="h-16 py-3 w-44 font-bold text-center text-base text-white rounded-full block bg-[#3a3636] hover:bg-[#8b8888]">
            {text}
        </button>
    )
}