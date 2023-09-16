import Header from "../components/header/Header"
import CarouselImg from "../components/CarouselImg"
import ProductList from "../components/ProductList"
import FooterTop from "../components/footer/FooterTop"
import FooterMid from "../components/footer/FooterMid"
import FooterBottom from "../components/footer/FooterBottom"

const products = ['items', 'items', 'items', 'items', 'items', 'items', 'items', 'items'];

const HomePage = () => {
  return (
    <div className="bg-gray-200">
      <Header />
      <CarouselImg />

      <div className="z-30 relative -mt-10 grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-6 mx-6 h-[60rem] ">
        {
          products.map((ele, index) =>
            <div key={index} className="bg-blue-400 border border-gray-300"> {ele} </div>
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