import { MdArrowForwardIos, MdKeyboardArrowDown } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

const SideBar = () => {
    return (
        <div>
            <span className="bg-[#283445] text-white w-full py-2 md:py-3 px-6 md:px-10 flex items-center gap-2 md:gap-4">
                <FaUserCircle className="text-2xl md:text-3xl" />
                <p className="md:text-xl font-semibold"> Hello, sign in </p>
            </span>

            <div className="">
                <h3 className="md:text-2xl font-bold md:font-semibold py-1 md:py-2 pl-6 md:px-10"> Trending </h3>
                <h2 className="sideBarHover"> Best Sellers </h2>
                <h2 className="sideBarHover"> New Releases </h2>
                <h2 className="sideBarHover"> Movers and Shakers </h2>
            </div>

            <hr className="border border-[#d0d4da] my-1 md:my-2" />

            <div className="">
                <h3 className="md:text-2xl font-bold md:font-semibold py-1 md:py-2 pl-6 md:px-10"> Digital Content And Devices </h3>
                <h2 className="sideBarHover flex items-center justify-between"> Echo & Alexa <MdArrowForwardIos className="text-gray-500" /> </h2>
                <h2 className="sideBarHover flex items-center justify-between"> Fire TV <MdArrowForwardIos className="text-gray-500" /> </h2>
                <h2 className="sideBarHover flex items-center justify-between"> Kindle E-Readers & eBooks <MdArrowForwardIos className="text-gray-500" /> </h2>
                <h2 className="sideBarHover flex items-center justify-between"> Audible Audiobooks <MdArrowForwardIos className="text-gray-500" /> </h2>
                <h2 className="sideBarHover flex items-center justify-between"> Amazon Prime Video <MdArrowForwardIos className="text-gray-500" /> </h2>
                <h2 className="sideBarHover flex items-center justify-between"> Amazon Prime Music <MdArrowForwardIos className="text-gray-500" /> </h2>
            </div>

            <hr className="border border-[#d0d4da] my-1 md:my-2" />

            <div className="">
                <h3 className="md:text-2xl font-bold md:font-semibold py-1 md:py-2 pl-6 md:px-10"> Shop By Category </h3>
                <h2 className="sideBarHover flex items-center justify-between"> Mobiles, Computers <MdArrowForwardIos className="text-gray-500" /> </h2>
                <h2 className="sideBarHover flex items-center justify-between"> TV, Appliances, Electronics <MdArrowForwardIos className="text-gray-500" /> </h2>
                <h2 className="sideBarHover flex items-center justify-between"> Men's Fashion <MdArrowForwardIos className="text-gray-500" /> </h2>
                <h2 className="sideBarHover flex items-center justify-between"> Women's Fashion <MdArrowForwardIos className="text-gray-500" /> </h2>
                <h2 className="sideBarHover flex items-center"> See All <MdKeyboardArrowDown className="text-gray-500" /> </h2>
            </div>
        </div>
    )
}

export default SideBar