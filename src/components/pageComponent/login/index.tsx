"use client"
import { loginHome } from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getItemLocalStorage } from "@/utils/localStorageUtil";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { useState } from "react";
import { BiLogoFacebookCircle } from 'react-icons/bi';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { useToggle } from "react-use";
import Logomain from "/public/Images/logomain.png";

export interface ILoginProps {
}

export default function Login(props: ILoginProps) {

    const [showPassword, toggleShowPassword] = useToggle(false);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const pathname = usePathname()
    const [error, setError] = useState<string>("");
    const dispatch = useAppDispatch();
    const loginInfo = useAppSelector((state) => state.login);
    const router = useRouter()
    const handleLogin = async () => {
        if (email === "" || password === "") {
            alert("Please complete all information");
        } else {
            if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
                setError("");
                try {
                    const result = await dispatch({
                        type: loginHome({
                            email: email,
                            password: password,
                        }).type,
                        payload: {
                            email: email,
                            password: password,
                        },
                    });
                    setTimeout(() => {
                        if (pathname === "/dang-nhap") {
                            router.push("/")
                        } else if (pathname === "/agency/login") {
                            router.push("/agency/dashboard")
                        }
                    }, 1000)
                } catch (error) {
                    // Xử lý lỗi
                    console.error(error); // In lỗi ra console
                }
            } else {
                setError("Invalid email!");
            }
        }
        // router.refresh()

    };
    const href = pathname === '/dang-nhap' ? '/dang-ky' : pathname === '/agency/login' ? '/agency/register' : '';

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
                                <label htmlFor="">Mật khẩu</label>
                            </div>
                            <div className='relative'>
                                <input
                                    className='rounded-[8px] border-[2px] border-[#F9D916] px-5 h-[48px] text-[14px] md:text-[16px] w-full outline-none hover:border-neutral3 focus:border-yellow-500'
                                    type={showPassword ? "text" : "password"}
                                    placeholder='Nhập mật khẩu'
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
                            <label htmlFor="" className='text-[15px] font-semibold text-[#1D1B32]'>Nhớ mật khẩu</label>
                        </div>
                        <div className='text-[15px] text-[#FD4B4B] font-semibold cursor-pointer'>Quên mật khẩu?</div>
                    </div>
                    <div onClick={handleLogin} className='w-full flex justify-center items-center h-[48px] rounded-[5px] bg-[#F6BD13] text-base font-semibold mb-[78px] cursor-pointer text-white'>Login</div>
                </form>
                <div>
                    <div className='text-center text-[#828282] text-[14px] mb-[16px]'>Hoặc tiếp tục với</div>
                    <div className='flex justify-center'>
                        <div className='flex justify-between mb-[16px] w-[340px]'>
                            <div className='flex px-[36px] py-[10px] w-[163px] gap-1 justify-center bg-[#E3E2E9] rounded cursor-pointer items-center'><FcGoogle className="text-lg" />Google</div>
                            <div onClick={() => signIn()} className='flex px-[36px] py-[10px] w-[163px] gap-1 justify-center items-center bg-[#E3E2E9] rounded cursor-pointer items'>
                                <div><BiLogoFacebookCircle className="text-[#1B74E4] text-[20px]" /></div>
                                <div>Facebook</div>
                            </div>
                        </div>
                    </div>
                    <div className='text-[12px] text-center'>Bạn chưa có tài khoản? <span className='text-[#F9D916]'><Link href={href}>Đăng ký ngay</Link></span></div>
                </div>
            </div>
        </div>
    );
}
