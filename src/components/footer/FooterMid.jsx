import React from 'react'
import BackToTop from '../BackToTop';

const FooterMid = () => {

    const list1 = ['About Us', 'Careers', 'Press Releases', 'Amazon Science'];
    const list2 = ['Facebook', 'Twitter', 'Instagram'];
    const list3 = ['Sell on Amazon', 'Sell under Amazon Accelerator', 'Protect and Build Your Brand', 'Amazon Global Selling', 'Become an Affiliate', 'Fulfilment by Amazon', 'Advertise Your Products', 'Amazon Pay on Merchants'];
    const list4 = ['COVID-19 and Amazon', 'Your Account', 'Returns Centre', '100% Purchase Protection', 'Amazon App Download', 'Help'];
    const list5 = [ 'Australia', 'Canada', 'Brazil', 'China', 'France', 'Germany', 'Italy', 'Japan', 'Mexico', 'Netherlands', 'Poland', 'Singapore', 'Spain', 'Turkey', 'United Arab Emirates', 'United Kingdom', 'United States'];

    return (
        <div>
            <BackToTop className='w-' />

            <div className='bg-[#242f3c] text-white grid justify-center grid-cols-4 lg:grid-cols-6 py-6 lg:py-12'>
                <div></div>
                <div>
                    <p className='text-sm italic lg:text-lg font-bold mb-1 lg:mb-2'> Get to Know Us </p>
                    {list1.map(ele => <h3 className='text-xs lg:text-md font-semibold cursor-pointer hover:underline mb-1 lg:mb-2'> {ele} </h3>)}
                </div>

                <div>
                    <p className='text-sm italic lg:text-lg font-bold mb-1 lg:mb-2'> Connect with Us </p>
                    {list2.map(ele => <h3 className='text-xs lg:text-md font-semibold cursor-pointer hover:underline mb-1 lg:mb-2'> {ele} </h3>)}
                </div>

                <div className='hidden lg:block'>
                    <p className='text-lg font-bold mb-1 lg:mb-2'> Make Money with Us </p>
                    {list3.map(ele => <h3 className='font-semibold cursor-pointer hover:underline mb-1 lg:mb-2'> {ele} </h3>)}
                </div>

                <div className='hidden lg:block'>
                    <p className='text-lg font-bold mb-1 lg:mb-2'> Let Us Help You </p>
                    {list4.map(ele => <h3 className='font-semibold cursor-pointer hover:underline mb-1 lg:mb-2'> {ele} </h3>)}
                </div>
                <div></div>
            </div>
            <hr className='border border-slate-600 ' />
            <div className='bg-[#242f3c] hidden justify-center lg:flex'>
                <div className='space-x-2 py-10 text-white'>
                    {list5.map(ele => <span className='text-sm cursor-pointer hover:underline'> {ele} </span>)}
                </div>
            </div>
        </div>
    )
}

export default FooterMid