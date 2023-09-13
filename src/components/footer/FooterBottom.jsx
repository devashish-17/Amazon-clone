import React from 'react'

const FooterBottom = () => {
    return (
        <div className='bg-[#131921] text-white flex justify-center'>
            <div className='flex flex-col items-center text-xs lg:text-sm font-semibold py-8'>
                <p className='lg:space-x-4 flex flex-col lg:flex-row items-center'>
                    <span className='cursor-pointer hover:underline'> Conditions of Use & Sale </span>
                    <span className='cursor-pointer hover:underline'> Privacy Notice </span>
                    <span className='cursor-pointer hover:underline'> Interest-Based Ads </span>
                </p>
                <p> © 1996-2023, Amazon.com, Inc. or its affiliates </p>
            </div>
        </div>
    )
}

export default FooterBottom