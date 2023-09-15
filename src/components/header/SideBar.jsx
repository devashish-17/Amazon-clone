import { MdArrowForwardIos, MdKeyboardArrowDown } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const comp1 = ['Echo & Alexa', 'Fire TV', 'Kindle E-Readers & eBooks', 'Audible Audiobooks', 'Amazon Prime Video', 'Amazon Prime Music'];
const comp2 = ["Mobiles", "Computers TV", "Appliances", "Electronics Men's Fashion"];
const comp3 = ["Your Account", "Customer Service", "Sign in"]

const SideBar = () => {
    return (
        <div className="h-screen flex-1 overflow-y-auto pb-10">
            <Link to="/login" className="bg-[#283445] text-white w-full py-2 md:py-3 px-6 md:px-10 flex items-center gap-2 md:gap-4">
                <FaUserCircle className="text-2xl md:text-3xl" />
                <p className="md:text-xl font-semibold"> Hello, sign in </p>
            </Link>

            <div className="">
                <h3 className="md:text-2xl font-bold md:font-semibold py-1 md:py-2 pl-6 md:px-10"> Trending </h3>
                <h2 className="sideBarHover"> Best Sellers </h2>
                <h2 className="sideBarHover"> New Releases </h2>
                <h2 className="sideBarHover"> Movers and Shakers </h2>
            </div>

            <hr className="border border-[#d0d4da] my-1 md:my-2" />

            <div className="">
                <h3 className="md:text-2xl font-bold md:font-semibold py-1 md:py-2 pl-6 md:px-10"> Digital Content And Devices </h3>
                {
                    comp1.map((ele, index) => 
                        <h2 className="sideBarHover flex items-center justify-between" key={index}>
                            {ele} <MdArrowForwardIos className="text-gray-500" />
                        </h2>
                    )
                }
            </div>

            <hr className="border border-[#d0d4da] my-1 md:my-2" />

            <div className="">
                <h3 className="md:text-2xl font-bold md:font-semibold py-1 md:py-2 pl-6 md:px-10"> Shop By Category </h3>
                {
                    comp2.map((ele, index) => 
                        <h2 className="sideBarHover flex items-center justify-between" key={index}>
                            {ele}
                        </h2>
                    )
                }
                <h2 className="sideBarHover flex items-center"> See All <MdKeyboardArrowDown className="text-gray-500" /> </h2>
            </div>

            <hr className="border border-[#d0d4da] my-1 md:my-2" />

            <div className="">
                <h3 className="md:text-2xl font-bold md:font-semibold py-1 md:py-2 pl-6 md:px-10"> Help & Settings </h3>
                {
                    comp3.map((ele, index) => 
                        <h2 className="sideBarHover flex items-center justify-between" key={index}>
                            {ele}
                        </h2>
                    )
                }
            </div>
        </div>
    )
}

export default SideBar