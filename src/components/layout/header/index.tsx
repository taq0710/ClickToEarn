'user client';
import Image from 'next/image';
import { HiMiniBars3 } from 'react-icons/hi2'
import Logomain from '/public/Images/logomain.png'
import { FaRegCircleUser } from "react-icons/fa6"
export interface HeaderProps { }

export default function Header(props: HeaderProps) {
  return (
    <header className=' mx-4 my-0 flex justify-between items-center pb-1 border-b-[2px] pt-4 '>
      <div className='text-[#F6BD13] text-2xl'><HiMiniBars3 /></div>
      <Image src={Logomain} alt='' width={180} />
      <div className='text-[#F6BD13] text-2xl'><FaRegCircleUser /></div>
    </header>
  );
}
