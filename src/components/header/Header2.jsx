import { amazon3 } from "../../assets/exportImg";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdArrowDropDown, MdOutlineLocationOn } from "react-icons/md";

const Header2 = () => {
    return (
        <div className="bg-[#273545] text-white px-2 h-8 lg:h-10 flex items-center justify-between">

            <div className="flex items-center lg:hidden text-sm">
                <MdOutlineLocationOn className="text-lg" />
                Delivering to {" --- "} Update your location
                <MdArrowDropDown />
            </div>

            <div className='hidden lg:flex items-center font-semibold h-full'> 
                <span className='headerHover2 gap-1'> <GiHamburgerMenu className='text-xl hidden md:block' /> All </span>
                <span className='headerHover2'> Amazon miniTV </span>
                <span className='headerHover2'> Sell </span>
                <span className='headerHover2'> Best Seller </span>
                <span className='headerHover2'> Today's Deals </span>
                <span className='headerHover2'> Mobiles </span>
                <span className='headerHover2'> Customer Service </span>
                <span className='headerHover2'> Prime </span>
                <span className='headerHover2'> Electronics </span>
                <span className='headerHover2'> Home & Kitchen </span>
            </div>
            <div className="headerHover2 gap-1 hidden 2xl:flex">
                <img src={amazon3} alt="image" className="w-8" />
                <p className="text-lg"> Shopping made easy | Download the app </p>
            </div>

        </div>
    )
}

export default Header2