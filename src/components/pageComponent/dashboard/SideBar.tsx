import React from 'react';
import { GrServices } from "react-icons/gr";
import { BiSolidUserAccount } from "react-icons/bi";
import { BsBoxSeam } from 'react-icons/bs';
import { MdOutlinePayment } from 'react-icons/md';
import Image from 'next/image';
import LogoMain from "/public/Images/logomain.png";

interface ISidebarDashBoardProps {
    activeTab: string;
    onTabClick: (title: string) => void;
}

const SidebarItems = [
    {
        title: "Quản lý dịch vụ",
        icon: <GrServices />,
    },
    {
        title: "Quản lý account",
        icon: <BiSolidUserAccount />,
    },
    {
        title: "Các gói dịch vụ",
        icon: <BsBoxSeam />,
    },
    {
        title: "Thanh toán",
        icon: <MdOutlinePayment />,
    },
];

export default function SidebarDashBoard({ activeTab, onTabClick }: ISidebarDashBoardProps) {
    return (
        <div className='border-r w-[20%] h-screen flex flex-col justify-between'>
            <div className='flex flex-col gap-10'>
                <div className={`flex justify-center py-5`}><Image src={LogoMain} alt='cle-logo' width={240} /></div>
                <div className='flex flex-col gap-5'>
                    {SidebarItems.map((item, index) => (
                        <div key={index} className='border-b py-2 mx-4'>
                            <div
                                className={`flex items-center p-3 gap-3 cursor-pointer ${activeTab === item.title ? 'bg-gray-300' : ''}`}
                                onClick={() => onTabClick(item.title)}
                            >
                                <div className='ml-3'>{item.icon}</div>
                                <div className='text-lg'>{item.title}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='p-4 text-center border-[2px] mx-9 my-3 cursor-pointer hover:bg-gray-300 rounded-md text-lg font-semibold'>Logout</div>
        </div>
    );
}
