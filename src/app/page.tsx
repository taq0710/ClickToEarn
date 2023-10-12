"use client";
import { useRouter } from "next/navigation";
import Logomain from "/public/Images/Group 45.png";
import Image from "next/image";
import { useEffect } from "react";
export default function Home() {
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/home");
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
  return (
<<<<<<< HEAD
    <div className="bg-gray-200 bg-bg-img">
      <div className="max-w-[540px] mx-auto my-0 bg-white h-screen">
        <div
          className={`max-w-[540px] mx-auto my-0 h-screen flex flex-col items-center justify-evenly `}
        >
          <div className="mt-[34%] mb-[26%]">
            <Image src={Logomain} alt="cle-logo" />
=======
    <div className='bg-gray-200'>
      <div className='max-w-[540px] mx-auto my-0 bg-white h-screen'>
        <div className={`max-w-[540px] mx-auto my-0 h-screen flex flex-col items-center justify-evenly `}>
          <div className="mt-[34%] mb-[26%]"><Image src={Logomain} alt='cle-logo' /></div>
          <div>
            <div className='py-[20px] px-[51px] rounded-[35px] bg-[#F6BD13] text-white mb-[17px] cursor-pointer'><Link href='/dang-ky'>Get Started</Link></div>
            <div className='text-center text-[16px] text-[#F6BD13] cursor-pointer font-medium'><Link href='/dang-nhap'>Login</Link></div>
>>>>>>> 3620ddc048f3af0553d9f111f34bba0c9396a013
          </div>
        </div>
      </div>
    </div>
  );
}
