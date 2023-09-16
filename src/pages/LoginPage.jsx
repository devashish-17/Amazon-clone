import { amazon2 } from "../assets/exportImg"
import { Link } from "react-router-dom"

const LoginPage = () => {
    return (
        <div>
            <div className="w-full">
                <div className="w-full pb-10">
                    <form className="w-80 md:w-96 mx-auto flex flex-col items-center">
                        <Link to="/">
                            <img className="w-24 md:w-32 my-2" src={amazon2} alt="image" />
                        </Link>
                        <div className="w-full border border-zinc-300 p-4 md:p-6  rounded-xl">
                            <h2 className="font-titleFont text-lg md:text-3xl font-medium mb-2 md:mb-4">
                                Sign in
                            </h2>
                            <div className="flex flex-col gap-3">
                                <div className="flex flex-col gap-2">
                                    <p className="text-sm font-bold">
                                        Email
                                    </p>
                                    <input
                                        // onChange={handleEmail}
                                        // value={email}
                                        className="w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-md outline-none focus-within:border-[#e77600]"
                                        type="email"
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
                                        // onChange={handlePassword}
                                        // value={password}
                                        className="w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-md outline-none focus-within:border-[#e77600]"
                                        type="password"
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
                                <button
                                    // onClick={handleLogin}
                                    className="w-full py-1.5 text-sm font-bold rounded-lg bg-[#ffd814]"
                                >
                                    Continue
                                </button>

                            </div>
                            <p className="text-xs text-black leading-4 mt-4">
                                By Continuing, you agree to Amazon's{" "}
                                <span className="text-blue-600">Conditions of Use </span>and{" "}
                                <span className="text-blue-600">Privace Notice.</span>
                            </p>

                            <p className="text-xs text-gray-600 mt-4 cursor-pointer group">
                                {/* <ArrowRightIcon />{" "} */}
                                <span className="text-blue-600 group-hover:text-orange-700 group-hover:underline underline-offset-1">
                                    Need help?
                                </span>
                            </p>
                            
                            <hr className="my-4 border border-gray-300" />
                            <p className="flex flex-col">
                                <span className="text-sm font-bold"> Buying for work? </span>
                                <span className="text-sm text-blue-600 cursor-pointer"> Shop on Amazon Business </span>
                            </p>
                        </div>
                        <p className="w-full text-xs text-gray-600 mt-4 flex items-center">
                            <span className="w-1/3 h-[1px] bg-zinc-400 inline-flex"></span>
                            <span className="w-1/3 text-center">New to Amazon?</span>
                            <span className="w-1/3 h-[1px] bg-zinc-400 inline-flex"></span>
                        </p>
                        <Link to="/signup" className="w-full">
                            <button className="w-full py-1.5 mt-4 text-sm font-semibold rounded-lg border border-zinc-400">
                                Create your Amazon account
                            </button>
                        </Link>
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

export default LoginPage