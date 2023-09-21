"use client"
import { useState } from "react"
import { useToggle } from "react-use";
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'
import { BiLogoFacebookCircle } from 'react-icons/bi'
import Link from 'next/link';
import { getItemLocalStorage } from "@/utils/localStorageUtil";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { loginAgency, loginHome } from "@/redux/features/auth/authSlice";
import { signIn } from "next-auth/react"
import { usePathname } from 'next/navigation'
import Image from "next/image";
import Logomain from "/public/Images/logomain.png"

export interface ILoginProps {
}

export default function Login(props: ILoginProps) {
    const [showPassword, toggleShowPassword] = useToggle(false);

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const pathname = usePathname()
    const [error, setError] = useState<string>("");
    const token = getItemLocalStorage("token")
    const dispatch = useAppDispatch();
    const loginInfo = useAppSelector((state) => state.login);

    const handleLogin = () => {
        if (email === "" || password === "") {
            alert("Please complete all information");
        } else {
            if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
                setError("");
                dispatch({
                    type: loginHome({
                        email: email,
                        password: password,
                    }).type,
                    payload: {
                        email: email,
                        password: password,
                    },
                });
            } else {
                setError("Invalid email!");
            }
        }
    };
    const href = pathname === '/login' ? '/register' : pathname === '/agency/login' ? '/agency/register' : '';
    return (
        <div className='flex justify-center mt-[50px] w-full '>
            <div className='w-full mx-[16px]'>
                <div className={`mb-[26%] flex justify-center`}><Image src={Logomain} alt='cle-logo' /></div>

                <form className='' >
                    <div className='flex flex-col gap-5 mb-[24px]'>
                        <div>
                            <div className='text-[14px] mb-[6px] ml-3'>
                                <label htmlFor="">Email</label>
                            </div>
                            <input
                                className='rounded-[8px] border-[2px] border-[#F9D916] px-5 h-[48px] text-[14px] md:text-[16px] w-full outline-none hover:border-neutral3 focus:border-yellow-500'
                                type="email"
                                placeholder='example@gmail.com'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <div className='text-[14px] mb-[6px] ml-3'>
                                <label htmlFor="">Password</label>
                            </div>
                            <div className='relative'>
                                <input
                                    className='rounded-[8px] border-[2px] border-[#F9D916] px-5 h-[48px] text-[14px] md:text-[16px] w-full outline-none hover:border-neutral3 focus:border-yellow-500'
                                    type={showPassword ? "text" : "password"}
                                    placeholder='Enter Your Password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center justify-center w-8">
                                    <button
                                        type="button"
                                        className="focus:outline-none text-neutral-500"
                                        onClick={toggleShowPassword}
                                    >
                                        {showPassword ? (
                                            <BsEyeSlashFill className='text-[#F9D916] text-xl' />
                                        ) : (
                                            <BsEyeFill className='text-[#F9D916] text-xl' />
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between mb-[34px]'>
                        <div>
                            <input type="checkbox" className='mr-[5px] p-[10px]' />
                            <label htmlFor="" className='text-[15px] font-semibold text-[#1D1B32]'>Remember Me</label>
                        </div>
                        <div className='text-[15px] text-[#FD4B4B] font-semibold cursor-pointer'>Forgot Password?</div>
                    </div>
                    <div onClick={handleLogin} className='w-full flex justify-center items-center h-[48px] rounded-[5px] bg-[#F6BD13] text-base font-semibold mb-[78px] cursor-pointer text-white'>Login</div>
                </form>
                <div>
                    <div className='text-center text-[#828282] text-[14px] mb-[16px]'>Or continue with</div>
                    <div className='flex justify-center'>
                        <div className='flex justify-between mb-[16px] w-[340px]'>
                            <div className='flex px-[36px] py-[10px] w-[163px] gap-1 justify-center bg-[#E3E2E9] rounded cursor-pointer items-center'><FcGoogle className="text-lg" />Google</div>
                            <div onClick={() => signIn()} className='flex px-[36px] py-[10px] w-[163px] gap-1 justify-center items-center bg-[#E3E2E9] rounded cursor-pointer items'>
                                <div><BiLogoFacebookCircle className="text-[#1B74E4] text-[20px]" /></div>
                                <div>Facebook</div>
                            </div>
                        </div>
                    </div>
                    <div className='text-[12px] text-center'>Don’t have account? <span className='text-[#F9D916]'><Link href={href}>Create now account</Link></span></div>
                </div>
            </div>
        </div>
    );
}
