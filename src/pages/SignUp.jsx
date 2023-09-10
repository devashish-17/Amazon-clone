import { IoMdArrowDropright } from "react-icons/io"
import { amazon2 } from "../assets/exportImg"
import { Link } from "react-router-dom"

const SignUp = () => {
    return (
        <div>
            <div className="w-full">
                <div className="w-full pb-10">
                    <form className="w-80 md:w-96 mx-auto flex flex-col items-center">
                        <Link to="/">
                            <img className="w-24 md:w-32 my-2" src={amazon2} alt="img" />
                        </Link>
                        <div className="w-full border border-zinc-300 p-4 md:p-6 rounded-xl">
                            <h2 className="font-titleFont text-lg md:text-3xl font-medium  mb-2 md:mb-4">
                                Create Account
                            </h2>
                            <div className="flex flex-col gap-3">
                                <div className="flex flex-col gap-2">
                                    <p className="text-sm font-bold">Your name</p>
                                    <input
                                        //   onChange={handleName}
                                        //   value={clientName}
                                        type="text"
                                        className="w-full py-1 border border-zinc-400 px-2 text-base rounded-md outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                                    />
                                    {/* {errClientName && (
                                            <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                                                <span className="italic font-titleFont font-extrabold text-base">
                                                !
                                                </span>
                                                {errClientName}
                                            </p>
                                        )} */}
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p className="text-sm font-bold">
                                        Email
                                    </p>
                                    <input
                                        //   onChange={handleEmail}
                                        //   value={email}
                                        type="email"
                                        className="w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-md outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                                    />
                                    {/* {errEmail && (
                                            <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                                                <span className="italic font-titleFont font-extrabold text-base">
                                                !
                                                </span>
                                                {errEmail}
                                            </p>
                                        )} */}

                                </div>
                                <div className="flex flex-col gap-2">
                                    <p className="text-sm font-bold">Password</p>
                                    <input
                                        //   value={password}
                                        //   onChange={handlePassword}
                                        type="password"
                                        className="w-full py-1 border border-zinc-400 px-2 text-base rounded-md outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                                    />
                                    {/* {errPassword && (
                                            <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                                                <span className="italic font-titleFont font-extrabold text-base">
                                                !
                                                </span>
                                                {errPassword}
                                            </p>
                                        )} */}
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p className="text-sm font-bold">Re-enter Password</p>
                                    <input
                                        //   onChange={handleCPassword}
                                        //   value={cPassword}
                                        type="password"
                                        className="w-full py-1 border border-zinc-400 px-2 text-base rounded-md outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                                    />
                                    {/* {errCPassword && (
                                            <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                                                <span className="italic font-titleFont font-extrabold text-base">
                                                !
                                                </span>
                                                {errCPassword}
                                            </p>
                                        )} */}
                                    <p className="text-xs text-gray-600">
                                        Passwords must be at least 6 characters.
                                    </p>
                                </div>
                                <button
                                    // onClick={handleRegistration}
                                    className="w-full py-1.5 text-sm font-bold rounded-lg bg-[#fdbc39]"
                                >
                                    Continue
                                </button>
                            </div>

                            <hr className="my-4 border border-gray-200" />
                            <p className="flex flex-col">
                                <span className="text-sm font-bold"> Buying for work? </span>
                                <span className="text-sm text-blue-600 cursor-pointer"> Create a free business account </span>
                            </p>
                            <hr className="my-4 border border-gray-200" />

                            <p className="text-xs text-black font-semibold flex gap-1">
                                Already have an account?
                                <Link to="/login">
                                    <span className="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100 flex items-end">
                                        Sign in  <IoMdArrowDropright />
                                    </span>
                                    
                                </Link>
                            </p>

                            <p className="text-xs font-semibold mt-4">
                                By creating an account or logging in, you agree to Amazon's <span className="text-blue-600 cursor-pointer">Conditions of Use </span> and <span className="text-blue-600 cursor-pointer"> Privacy Policy. </span>
                            </p>

                        </div>
                    </form>
                </div>

                <div className="w-full bg-gradient-to-t from-white via-white to-zinc-200 flex flex-col gap-4 justify-center items-center py-10">
                    <div className="flex items-center gap-6">
                        <p className="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">
                            Conditions of Use
                        </p>
                        <p className="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">
                            Privacy Notice
                        </p>
                        <p className="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">
                            Privacy Notice
                        </p>
                    </div>
                    <p className="text-xs text-gray-600">
                        © 1996-2023, ReactBd.com, Inc. or its affiliates
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SignUp