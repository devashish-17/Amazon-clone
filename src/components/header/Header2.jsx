import { useEffect, useRef, useState } from "react";
import { amazon3 } from "../../assets/exportImg";
import { RxHamburgerMenu } from "react-icons/rx"
import { GiHamburgerMenu } from "react-icons/gi";
import SideBar from "./SideBar";
import { MdClose } from "react-icons/md";

const Header2 = () => {
    const ref = useRef();
    const [sidebar, setSidebar] = useState(false);
    useEffect(()=> {
        document.body.addEventListener("click", (e)=>{
            if(e.target.contains(ref.current)) {
                setSidebar(false)
            }
        })
    }, [ref, sidebar])
    return (
        <div className="bg-[#273545] text-white px-2 h-8 lg:h-10 flex items-center justify-between">

            {/* <div className="flex items-center lg:hidden text-sm">
                <MdOutlineLocationOn className="text-lg" />
                Delivering to {" --- "} Update your location
                <MdArrowDropDown />
            </div> */}

            <div className='flex items-center text-xs md:text-base lg:font-semibold h-full'> 
                <span onClick={()=>setSidebar(true)} className='headerHover2 gap-1'> <RxHamburgerMenu className='text-lg' /> All </span>
                <span className='headerHover2'> Prime </span>
                <span className='headerHover2'> Sell </span>
                <span className='headerHover2'> Best Seller </span>
                <span className='headerHover2'> Today's Deals </span>
                <span className='headerHover2 hidden lg:flex'> Mobiles </span>
                <span className='headerHover2 hidden lg:flex'> Customer Service </span>
                <span className='headerHover2 hidden lg:flex'> Amazon miniTV </span>
                <span className='headerHover2 hidden lg:flex'> Electronics </span>
                <span className='headerHover2 hidden lg:flex'> Home & Kitchen </span>
            </div>
            <div className="headerHover2 gap-1 hidden 2xl:flex">
                <img src={amazon3} alt="image" className="w-8" />
                <p className="text-lg"> Shopping made easy | Download the app </p>
            </div>


            {sidebar && (
                <div className="w-full h-screen text-black fixed top-0 left-0 bg-[#131921] bg-opacity-80 z-50">
                    <div className="w-full h-full relative">
                        <div ref={ref} className="w-72 md:w-96 h-full bg-white border border-black">
                            <SideBar />
                        </div>
                        <span onClick={()=>setSidebar(false)} className="absolute cursor-pointer top-2 left-72 md:left-[24rem] ">
                            <MdClose className="text-white text-2xl md:text-4xl" />
                        </span>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Header2