import React from 'react'
import Header from '../components/header/Header'
import FooterMid from '../components/footer/FooterMid'
import FooterBottom from '../components/footer/FooterBottom'
import FooterTop from '../components/footer/FooterTop'
import { Link } from "react-router-dom";

const products = ['item', 'item', 'item', 'item', 'item', 'item', 'item', 'item'];

const ProductListPage = () => {
    return (
        <div>
            <Header />

            <div className='grid grid-cols-6 my-2 lg:my-10'>
                <div className='bg-gray-200 hidden lg:block'> Filter </div>
                <div className='col-span-6 lg:col-span-5 px-4 lg:px-8'>
                    <p className='text-lg font-bold mb-2'> Results </p>
                    <div className="z-30 grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 gap-2 md:gap-6 h-[60rem] ">
                        {
                            products.map((ele, index) =>
                                <Link to="/singleProduct" key={index} className="bg-gray-200 border border-gray-300"> {ele} </Link>
                            )
                        }
                    </div>
                </div>
            </div>

            <FooterTop />
            <FooterMid />
            <FooterBottom />
        </div>
    )
}

export default ProductListPage