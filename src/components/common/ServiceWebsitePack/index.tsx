import * as React from 'react';

export interface IServiceWebsitePackProps {
    namePack?: string;
    visit?: string;
    time?: string;
    user?: string;
    price?: number;
}

export default function ServiceWebsitePack({ namePack, price, visit, time, user }: IServiceWebsitePackProps) {
    return (
        <div className='w-[240px] flex flex-col items-center gap-5 border border-blue-400 rounded-md'>
            <div className={`border-b w-full text-center py-2 text-xl font-bold bg-gradient-to-r from-blue-300 to-blue-500 text-white`}>{namePack}</div>
            <div className='flex'>Visit:<div className='font-semibold'>{visit}</div></div>
            <div className='flex'>Giờ xem:<div className='font-semibold'>{time}</div></div>
            <div className='flex'>User:<div className='font-semibold'>{user}</div></div>
            <div className='w-[60%] text-center p-2 border rounded-lg bg-red-400 text-white hover:bg-red-500 cursor-pointer hover:scale-110 transition-transform duration-300 shadow-xl'>Đăng ký</div>
            <div className='border-t w-full text-center py-2'>{price}đ</div>
        </div>
    );
}
