import { amazon1 } from "../../assets/exportImg";
import { MdArrowDropDown, MdOutlineLocationOn } from "react-icons/md";
import Searchbox from "./Searchbox";
import { LiaCartPlusSolid } from "react-icons/lia";
import { FaRegUser } from "react-icons/fa"
import Header2 from "./Header2";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <div className="bg-[#131921] md:py-2 sticky top-0 z-50">
                <div className="text-white h-14 md:h-12 px-2 flex items-center justify-between md:gap-2">
                    <div className="h-full flex items-center">
                        <Link to="/" className="headerHover">
                            <img src={amazon1} alt="img" className="w-24 md:w-32" />
                        </Link>
                    </div>

                    <div className="headerHover hidden lg:flex">
                        <MdOutlineLocationOn className="text-2xl" />
                        <p className="text-sm flex flex-col">
                            Deliver to {" ---- "} <span className="font-semibold -mt-[0.2rem]"> Update Location </span>
                        </p>
                    </div>

                    <div className="flex-grow hidden md:flex">
                        <Searchbox />
                    </div>

                    <div className="headerHover hidden lg:flex">
                        <p className="font-semibold"> EN </p>
                        <MdArrowDropDown className="text-lg" />
                    </div>

                    <div className="flex items-center h-full">
                        <Link to="/login" className="headerHover">
                            <FaRegUser className="text-xl lg:mr-2 lg:text-xl" />
                            <p className="text-sm hidden lg:flex flex-col">
                                Hello, {" ---- "} <span className="font-semibold flex items-end -mt-[0.2rem]"> Accounts & Lists <MdArrowDropDown className="text-lg" /> </span>
                            </p>
                        </Link>

                        <div className="headerHover hidden xl:flex">
                            <p className="text-sm flex flex-col">
                                Returns <span className="font-semibold flex items-end -mt-[0.2rem]"> & Orders </span>
                            </p>
                        </div>

                        <Link to="/cart" className="headerHover">
                            <div className="bg-[#131921] w-[0.6rem] md:w-5 absolute ml-[0.7rem] -mt-[1.3rem] md:ml-[1rem] md:-mt-[1.5rem] flex justify-center">
                                <p className="text-orange-500 font-bold text-sm md:text-base">
                                    0
                                </p>
                            </div>
                            <LiaCartPlusSolid className="text-3xl md:text-5xl" />
                            <p className="font-semibold hidden md:block">Cart</p>
                        </Link>
                    </div>
                </div>
            </div>

            <Header2 />
        </>
    )
}

export default Header