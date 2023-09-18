"use client"
import { useState } from 'react';
import Logomain from "/public/Images/logomain.png"
import Image from 'next/image';
import Link from 'next/link';
import Login from '../login';
export interface IStartedProps {
}

export default function Started(props: IStartedProps) {
    const [isLoginVisible, setLoginVisible] = useState(false);

    const toggleLoginVisibility = () => {
        setLoginVisible(!isLoginVisible); 
    };
    return (
        <div className='max-w-[540px] mx-auto my-0 bg-white h-screen'>
            <div className={`max-w-[540px] mx-auto my-0 h-screen flex flex-col items-center ${isLoginVisible ? "justify-center" : " justify-evenly"} `}>
                <div className={`${isLoginVisible ? "mt-0 mb-0" : "mt-[34%] mb-[26%]"} `}><Image src={Logomain} alt='cle-logo' /></div>
                {isLoginVisible ? <Login /> :

                    <div>
                        <div className='py-[20px] px-[51px] rounded-[35px] bg-[#F6BD13] text-white mb-[17px] cursor-pointer'><Link href='/register'>Get Started</Link></div>
                        <div onClick={toggleLoginVisibility} className='text-center text-[16px] text-[#F6BD13] cursor-pointer font-medium'>Login</div>
                    </div>
                }
            </div>
        </div>
    );
}
