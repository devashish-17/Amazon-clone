import { useEffect, useState } from "react"

const BackToTop = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div>
            <button
                onClick={scrollToTop}
                className='bg-[#40546e] w-full hover:bg-[#5e7ca2] flex justify-center py-2 lg:py-4 text-white font-semibold text-sm'
            >
                <span> Back to top </span>
            </button>
        </div>
    )
}

export default BackToTop