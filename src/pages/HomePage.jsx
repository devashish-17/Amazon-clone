import Header from "../components/header/Header"
import CarouselImg from "../components/CarouselImg"
import ProductList from "../components/ProductList"
import FooterTop from "../components/footer/FooterTop"
import FooterMid from "../components/footer/FooterMid"
import FooterBottom from "../components/footer/FooterBottom"
import { Link } from "react-router-dom";

const productCategories = ['Categories', 'Categories', 'Categories', 'Categories', 'Categories', 'Categories', 'Categories', 'Categories'];

const HomePage = () => {
    return (
        <div className="bg-gray-200">
            <Header />
            <CarouselImg />

            <div className="z-30 relative -mt-10 grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-6 mx-6 h-[60rem] ">
                {
                    productCategories.map((ele, index) =>
                        <Link to="/productlistpage" key={index} className="bg-white border border-gray-300 flex flex-col justify-between p-6">
                            {ele}
                            <span className="text-sm text-blue-600 cursor-pointer hover:text-red-500 hover:underline"> See more </span>
                        </Link>
                    )
                }
            </div>

            {/* <ProductList /> */}


            <FooterTop />
            <FooterMid />
            <FooterBottom />
        </div>
    )
}

export default HomePage