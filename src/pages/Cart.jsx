import Header from '../components/header/Header'
import { amazonCart } from "../assets/exportImg";
import FooterMid from '../components/footer/FooterMid';
import FooterBottom from '../components/footer/FooterBottom';
import { Link } from "react-router-dom"


const Cart = () => {
  return (
      <div className='bg-gray-200'>
          <Header />

          <div className='flex justify-center lg:justify-start my-10 border py-4 lg:py-10 bg-white'>
              <div className='flex flex-col lg:flex-row items-center px-8 gap-2'>
                  <img src={amazonCart} alt="img" className="w-96" />
                  <div className='flex flex-col items-center'>
                      <p className='text-xl font-bold'> Your Amazon Cart is empty </p>
                      <span className='text-sm text-[#1a5d5f] font-semibold mb-6'> Shop today's deals </span>
                      <div className='flex flex-col lg:flex-row lg:gap-2'>
                          <Link to='/login'>
                              <button className='w-80 lg:w-full lg:px-4 my-1 h-10 rounded-lg font-semibold bg-[#ffd814]'>
                                  Sign in to your account
                              </button>
                          </Link>
                          <Link to='/signup'>
                              <button className='w-80 lg:w-full lg:px-4 my-1 h-10 rounded-lg font-semibold border border-black'>
                                  Sign up now
                              </button>
                          </Link>
                      </div>
                  </div>
              </div>
          </div>

          <div className='text-xs lg:text-sm px-4 my-8 font-semibold bg-white py-4'>
              <p> The price and availability of items at Amazon.in are subject to change. The shopping cart is a temporary place to store a list of your items and reflects each item's most recent price. </p>
              <p> Do you have a promotional code? We'll ask you to enter your claim code when it's time to pay. </p>

          </div>

          <FooterMid />
          <FooterBottom />
      </div>
    )
}

export default Cart