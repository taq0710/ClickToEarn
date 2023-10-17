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
    <div className="bg-gray-200 bg-bg-img">
      <div className="max-w-[540px] mx-auto my-0 bg-white h-screen">
        <div
          className={`max-w-[540px] mx-auto my-0 h-screen flex flex-col items-center justify-evenly `}
        >
          <div className="mt-[34%] mb-[26%]">
            <Image src={Logomain} alt="cle-logo" />
          </div>
        </div>
      </div>
    </div>
  );
}
