import { Link } from "react-router-dom"

const FooterTop = () => {
    return (
        <div className="py-6 lg:py-10 border">  
            <hr className="border border-gray-300" />
            <div className="flex justify-center py-4 lg:py-8">
                <div className="flex flex-col items-center gap-2">
                    <p className="text-sm font-semibold"> See personalized recommendations </p>
                    <Link to="/login">
                        <span className="py-1.5 px-24 text-sm font-bold rounded-lg bg-[#fdbc39]">
                            Sign in
                        </span>
                    </Link>

                    <p className="text-xs text-black font-semibold flex gap-1">
                        New customer?
                        <Link to="/signup">
                            <span className="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100 flex items-end">
                                Start here.
                            </span>

                        </Link>
                    </p>
                </div>
            </div>
            <hr className="border border-gray-300" />
        </div>
    )
}

export default FooterTop