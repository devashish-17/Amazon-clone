import Header from "../components/header/Header"
import CarouselImg from "../components/CarouselImg"

const HomePage = () => {
  return (
    <div className="bg-gray-100">
        <Header />
        <CarouselImg />

        <div className="z-30 relative -mt-10 grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-6 mx-6 h-[60rem] ">
            <div className="bg-blue-400 border border-gray-300">
                items
            </div>
            <div className="bg-blue-400 border border-gray-300">
                items
            </div>
            <div className="bg-blue-400 border border-gray-300">
                items
            </div>
            <div className="bg-blue-400 border border-gray-300">
                items
            </div>
            <div className="bg-blue-400 border border-gray-300">
                items
            </div>
            <div className="bg-blue-400 border border-gray-300">
                items
            </div>
            <div className="bg-blue-400 border border-gray-300">
                items
            </div>
            <div className="bg-blue-400 border border-gray-300">
                items
            </div>
        </div>
        
    </div>
  )
}

export default HomePage