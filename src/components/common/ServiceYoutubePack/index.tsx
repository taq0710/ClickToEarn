import * as React from 'react';
export interface IServiceYoutubePackProps {
    namePack?: string;
    subcribe?: string;
    time?: string;
    price?: number;
}

export default function ServiceYoutubePack({ namePack, price, subcribe, time }: IServiceYoutubePackProps) {
    return (
        <div className='w-[240px] flex flex-col items-center gap-5 border border-red-400 rounded-md'>
            <div className={`border-b w-full text-center py-2 text-xl font-bold bg-gradient-to-r from-red-300 to-red-500 text-white`}>{namePack}</div>
            <div className='flex'>Subcribe:<div className='font-semibold'>{subcribe}</div></div>
            <div className='flex'>Giờ xem:<div className='font-semibold'>{time}</div></div>
            <div className='shadow-xl w-[60%] text-center p-2 border rounded-lg bg-red-400 text-white hover:bg-red-500 cursor-pointer hover:scale-110 transition-transform duration-300'>Đăng ký</div>
            <div className='border-t w-full text-center py-2'>{price}đ</div>
        </div>
    );
}
