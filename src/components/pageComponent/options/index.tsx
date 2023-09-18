import Image from 'next/image';
import * as React from 'react';
import UserDefault from "/public/Images/userdefault.png";
import Coin from "/public/Images/coin.png";
import Mission from "/public/Images/Frame 427320665.png"
import { BiHistory, BiReceipt } from "react-icons/bi"
import { BsChevronRight } from "react-icons/bs"
import { PiUsersThree } from "react-icons/pi"
import { AiOutlineGift } from "react-icons/ai"
import { MdPayment } from "react-icons/md"
import Link from 'next/link';
export interface IOptionsProps {
  userName?: string;
  userAvatar?: string;
  totalCoinsUplevel: number;
  userCoins: number;
  level: number;
}

const options = [
  {
    iconleft: <BiHistory />,
    title: "Lịch sử nhiệm vụ",
    link: "/missionhistory"
  },
  {
    iconleft: <BiReceipt />,
    title: "Lịch sử rút tiền",
    link: ""
  }, {
    iconleft: <PiUsersThree />,
    title: "Tham gia cộng đồng",
    link: ""
  }, {
    iconleft: <AiOutlineGift />,
    title: "Phần thưởng",
    link: ""
  },
  {
    iconleft: <MdPayment />,
    title: "Rút tiền",
    link: "/withdraw"
  },
]

export default function Options({ userName, totalCoinsUplevel, userCoins, level }: IOptionsProps) {

  const percent = userCoins / totalCoinsUplevel * 100;
  return (
    <div className='mt-[25px] mx-4'>
      <div className='flex flex-col items-center relative gap-3 mb-[27px]'>
        <Image src={UserDefault} alt='avatar' width={142} className='rounded-full' />
        <div className='text-xl font-semibold'>{userName}abc</div>
        <div className='px-[20px] py-[10px] w-[191px] text-[12px] rounded-[20px] border border-[#F9D916] mb-[22px]'>Thay đổi thông tin cá nhân</div>
        <div className='flex items-center gap-1 w-full justify-center'>
          <div className='text-[13px] text-[#828282]'>Lv.{level}</div>
          <div className="w-[508px] bg-[#F9D916] h-[16px] rounded-lg">
            <div className={`w-[${percent}%] bg-[#F6BD13] h-[16px] rounded-lg`}></div>
          </div>
          <Image src={Coin} alt='coin' />
        </div>
        <Image src={Mission} alt='' className='absolute top-0 left-0' />
      </div>

      {options.map((items, index) => (
        <Link key={index} href={items.link}>
          <div className='flex items-center justify-between py-[25px] border-b-[2px] cursor-pointer hover:bg-gray-100'>
            <div className='flex items-center gap-[14px]'>
              <div className='text-[#F6BD13] text-2xl'>{items.iconleft}</div>
              <div>{items.title}</div>
            </div>
            <div><BsChevronRight /></div>
          </div>
        </Link>
      ))}
    </div>
  );
}
