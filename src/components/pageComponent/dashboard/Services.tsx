"use client"
import Model from '@/components/common/Model';
import Image from 'next/image';
import * as React from 'react';
import Youtube from "/public/Images/yt_1200.png"
import ServiceYoutubePack from '@/components/common/ServiceYoutubePack';
import ServiceWebsitePack from '@/components/common/ServiceWebsitePack';
export interface IServicesProps {
}

const data = [{
    name: "youtube",
    sub: "1k",
    time: "2k",
    price: 3000000
},
{
    name: "youtube",
    sub: "1k",
    time: "2k",
    price: 3000000
}
]
const dataWeb = [{
    name: "vinamilk",
    visit: "10k",
    time: "1k",
    use: "100",
    price: 3000000
},
{
    name: "coca",
    visit: "10k",
    time: "1k",
    use: "100",
    price: 3000000
}]
export default function Services(props: IServicesProps) {
    const [isModalYoutubeOpen, setIsModalYoutubeOpen] = React.useState(false);
    const [isModalWebsiteOpen, setIsModalWebsiteOpen] = React.useState(false);

    const openModalYoutube = () => {
        setIsModalYoutubeOpen(true);
    };

    const closeModalYoutube = () => {
        setIsModalYoutubeOpen(false);
    };
    const openModalWebsite = () => {
        setIsModalWebsiteOpen(true);
    };

    const closeModalWebsite = () => {
        setIsModalWebsiteOpen(false);
    };
    return (
        <div className='w-[80%]'>
            <div className='text-center mt-[30px] text-xl font-semibold'>CÁC GÓI DỊCH VỤ</div>
            <div className='mt-[50px]'>
                <div className='mx-[30px] text-xl font-semibold my-5'>Youtube!</div>
                <div className='flex mx-[30px]'>
                    <div className='overflow-x-auto mx-[30px]'>
                        <div className='flex gap-4 '>
                            {data.map((item, index) => (
                                <div key={index}><ServiceYoutubePack namePack={item.name} price={item.price} subcribe={item.sub} time={item.time} /></div>
                            ))}
                        </div>
                    </div>
                    <div className='w-[240px] text-[80px] flex items-center justify-center border text-gray-400 cursor-pointer' onClick={openModalYoutube}>+</div>
                </div>
                <Model isOpen={isModalYoutubeOpen} onClose={closeModalYoutube}>
                    <div className='w-[400px] h-[400px] bg-[#FFFDDA] flex flex-col items-center justify-evenly'>
                        <div className='text-lg font-semibold py-3'>Đăng ký gói youtube của riêng bạn</div>
                        <form className='w-[400px]'>
                            <div className='flex  mb-3'>
                                <label htmlFor="" className='w-[20%]'>Tên gói</label>
                                <input className='w-[80%] h-[40px] p-2 border border-[#F9D916]' type="text" />
                            </div>
                            <div className='flex  mb-3'>
                                <label htmlFor="" className='w-[20%]'>Lượt xem</label>
                                <input className='w-[80%] h-[40px] p-2 border border-[#F9D916]' type="number" />
                            </div>
                            <div className='flex  mb-3'>
                                <label htmlFor="" className='w-[20%]'>Lượt đăng ký</label>
                                <input className='w-[80%] h-[40px] p-2 border border-[#F9D916]' type="number" />
                            </div>

                            <div className='w-full flex justify-center'><div className='px-[22px] py-[8px] w-[132px] text-center bg-[#F9D916] text-[17px] rounded-[5px]' >Thêm</div></div>
                        </form>
                    </div>
                </Model>
            </div>
            <div className='mt-[50px]'>
                <div className='mx-[30px] text-xl font-semibold my-5'>Website!</div>
                <div className='flex mx-[30px]'>
                    <div className='overflow-x-auto mx-[30px]'>
                        <div className='flex gap-4 '>
                            {dataWeb.map((item, index) => (
                                <div key={index}><ServiceWebsitePack namePack={item.name} time={item.time} user={item.use} visit={item.visit} price={item.price} /></div>
                            ))}
                        </div>
                    </div>
                    <div className='w-[240px] text-[80px] flex items-center justify-center border text-gray-400 cursor-pointer' onClick={openModalWebsite}>+</div>
                </div>
                <Model isOpen={isModalWebsiteOpen} onClose={closeModalWebsite}>
                    <div className='w-[400px] h-[400px] bg-[#FFFDDA] flex flex-col items-center justify-evenly'>
                        <div className='text-lg font-semibold py-3'>Đăng ký gói Website của riêng bạn</div>
                        <form className='w-[400px]'>
                            <div className='flex  mb-3'>
                                <label htmlFor="" className='w-[20%]'>Tên gói</label>
                                <input className='w-[80%] h-[40px] p-2 border border-[#F9D916]' type="text" />
                            </div>
                            <div className='flex  mb-3'>
                                <label htmlFor="" className='w-[20%]'>Visit</label>
                                <input className='w-[80%] h-[40px] p-2 border border-[#F9D916]' type="number" />
                            </div>
                            <div className='flex  mb-3'>
                                <label htmlFor="" className='w-[20%]'>Giờ xem</label>
                                <input className='w-[80%] h-[40px] p-2 border border-[#F9D916]' type="number" />
                            </div>

                            <div className='w-full flex justify-center'><div className='px-[22px] py-[8px] w-[132px] text-center bg-[#F9D916] text-[17px] rounded-[5px]' >Thêm</div></div>
                        </form>
                    </div>
                </Model>
            </div>
        </div>
    );
}
