"use client"
import * as React from 'react';
import { useToggle } from "react-use";
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'
import { BiLogoFacebookCircle } from 'react-icons/bi'
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
export interface ILoginProps {
}
interface IFormValues {
    phone: string;
    password: string;
}
export default function Login(props: ILoginProps) {
    const [showPassword, toggleShowPassword] = useToggle(false);
    const [password, setPassword] = React.useState('');
    const {
        handleSubmit,
        formState: { errors },
    } = useForm<IFormValues>({
        defaultValues: {
            phone: "",
            password: "",
        },
    });
    const onSubmit: SubmitHandler<IFormValues> = (data) => {
        console.log(data);
    };
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };
    return (
        <div className='flex justify-center mt-[50px] w-full '>
            <div className='w-full mx-[16px]'>
                <form className='' onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex flex-col gap-5 mb-[24px]'>
                        <div>
                            <div className='text-[14px] mb-[6px]'>
                                <label htmlFor="">Email</label>
                            </div>
                            <input
                                className='rounded-[8px] border-[2px] border-[#F9D916] px-5 h-[48px] text-[14px] md:text-[16px] w-full outline-none hover:border-neutral3 focus:border-yellow-500'
                                type="email"
                                placeholder='example@gmail.com' />
                        </div>
                        <div>
                            <div className='text-[14px] mb-[6px]'>
                                <label htmlFor="">Password</label>
                            </div>
                            <div className='relative'>
                                <input
                                    className='rounded-[8px] border-[2px] border-[#F9D916] px-5 h-[48px] text-[14px] md:text-[16px] w-full outline-none hover:border-neutral3 focus:border-yellow-500'
                                    type={showPassword ? "text" : "password"}
                                    placeholder='Enter Your Password'
                                    value={password}
                                    onChange={handlePasswordChange}
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
                    <div onClick={handleSubmit(onSubmit)} className='w-full flex justify-center items-center h-[48px] rounded-[5px] bg-[#F6BD13] text-base font-semibold mb-[78px] cursor-pointer text-white'>Login</div>
                </form>
                <div>
                    <div className='text-center text-[#828282] text-[14px] mb-[16px]'>Or continue with</div>
                    <div className='flex justify-center'>
                        <div className='flex justify-between mb-[16px] w-[340px]'>
                            <div className='flex px-[36px] py-[10px] w-[163px] gap-1 justify-center bg-[#E3E2E9] rounded cursor-pointer'><FcGoogle />Google</div>
                            <div className='flex px-[36px] py-[10px] w-[163px] gap-1 justify-center bg-[#E3E2E9] rounded cursor-pointer'> <BiLogoFacebookCircle className="text-[#1B74E4]" />Facebook</div>
                        </div>
                    </div>
                    <div className='text-[12px] text-center'>Don’t have account? <span className='text-[#F9D916]'><Link href='/register'>Create now account</Link></span></div>
                </div>
            </div>
        </div>
    );
}
