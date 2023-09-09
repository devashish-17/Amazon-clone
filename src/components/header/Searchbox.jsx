import { BiSearch } from "react-icons/bi";
import { MdArrowDropDown } from "react-icons/md";

const Searchbox = () => {
  return (
    <div className="flex flex-grow px-2 md:px-0 h-8 md:h-10">
      <div className="bg-gray-300 w-14 text-gray-500 hidden md:flex items-center justify-center font-semibold rounded-l-md">
        All <MdArrowDropDown className="text-lg" />
      </div>
      <input type="text" name="" className="w-full text-black outline-none px-3 md:font-semibold rounded-l-md md:rounded-none" placeholder="Search Amazon.in" />
      <div className="bg-[rgb(233,178,85)] w-14 flex justify-center items-center rounded-r-md">
        <BiSearch className="text-2xl text-black" />
      </div>
    </div>
  )
}

export default Searchbox