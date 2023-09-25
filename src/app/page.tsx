import Logomain from "/public/Images/logomain.png"
import Image from 'next/image';
import Link from 'next/link';
export default function Home() {
  return (
    <div className='bg-gray-200'>
      <div className='max-w-[540px] mx-auto my-0 bg-white h-screen'>
        <div className={`max-w-[540px] mx-auto my-0 h-screen flex flex-col items-center justify-evenly `}>
          <div className="mt-[34%] mb-[26%]"><Image src={Logomain} alt='cle-logo' /></div>
          <div>
            <div className='py-[20px] px-[51px] rounded-[35px] bg-[#F6BD13] text-white mb-[17px] cursor-pointer'><Link href='/register'>Get Started</Link></div>
            <div className='text-center text-[16px] text-[#F6BD13] cursor-pointer font-medium'><Link href='/login'>Login</Link></div>
          </div>
        </div>
      </div>
    </div>
  )
}
