"use client"
import CustomPagination from '@/components/common/CustomPanigation';
import InputFile from '@/components/common/InputFile';
import Model from '@/components/common/Model';
import Image from 'next/image';
import * as React from 'react';
import { BsFillPencilFill } from 'react-icons/bs';

export interface IServiceManagementProps {
}
const data: DataItem[] = [

    {
        stt: 1,
        title: "Vinamilk",
        des: "Quảng cáo sữa",
        url: "https://www.vinamilk.com.vn/",
        thumb: "https://getuikit.com/v2/docs/images/placeholder_600x400.svg",
        sevices: "100k follower,10k view, ",
        date: "10/10/2023",
        verify: "đã xác minh",
        status: "đang hoạt động",
        edit: "",
        report: "",
    },
    {
        stt: 1,
        title: "Vinamilk",
        des: "Quảng cáo sữa",
        url: "https://www.vinamilk.com.vn/",
        thumb: "https://getuikit.com/v2/docs/images/placeholder_600x400.svg",
        sevices: "100k follower,10k view, ",
        date: "10/10/2023",
        verify: "đã xác minh",
        status: "đang hoạt động",
        edit: "",
        report: "",
    }, {
        stt: 1,
        title: "Vinamilk",
        des: "Quảng cáo sữa tươi 100%",
        url: "https://www.vinamilk.com.vn/",
        thumb: "https://getuikit.com/v2/docs/images/placeholder_600x400.svg",
        sevices: "100k follower,10k view, ",
        date: "10/10/2023",
        verify: "đã xác minh",
        status: "đang hoạt động",
        edit: "",
        report: "",
    },
]
interface DataItem {
    stt: number;
    title: string,
    des: string,
    url: string,
    thumb: string,
    sevices: string,
    date: string,
    verify: string,
    status: string,
    edit: string,
    report: string,
}
export default function ServiceManagement(props: IServiceManagementProps) {
    const [currentPage, setCurrentPage] = React.useState(1);
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [thumb, setThumb] = React.useState<string>('');
    const itemsPerPage = 8;

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    const getCurrentPageData = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return data.slice(startIndex, endIndex);
    };
    return (
        <div className='w-[80%] px-4'>
            <div className='text-center mt-[30px] text-xl font-semibold'>QUẢN LÝ DỊCH VỤ</div>
            <div className='flex justify-end items-center gap-2'>
                <input type="text" placeholder='Search' className='border px-5 py-2' />
                <div className='font-semibold cursor-pointer flex border px-5 py-2' onClick={openModal}>
                    <div>Thêm</div>
                    <div>+</div>
                </div>

            </div>
            <div className='table-auto lg:w-full w-[650px] bg-[#F4F4F4] mt-[52px] mb-[80px] rounded-[8px] h-[631px]'>
                <div className='flex px-[16px] text-[14px] font-[600] text-[#4D515B] items-center'>
                    <div className='p-[20px] w-[65px] lg:w-[9%] text-center'>STT</div>
                    <div className='p-[20px] w-[65px] lg:w-[9%] text-center'>Title</div>
                    <div className='p-[20px] w-[65px] lg:w-[18%] text-center'>Des</div>
                    <div className='p-[20px] w-[65px] lg:w-[9%] text-center'>Url</div>
                    <div className='p-[20px] w-[65px] lg:w-[9%] text-center'>Thumb</div>
                    <div className='p-[20px] w-[65px] lg:w-[9%] text-center'>Các dịch vụ</div>
                    <div className='p-[20px] w-[65px] lg:w-[9%] text-center'>Date</div>
                    <div className='p-[20px] w-[65px] lg:w-[9%] text-center'>Verify</div>
                    <div className='p-[20px] w-[65px] lg:w-[9%] text-center'>Status</div>
                    <div className='p-[20px] w-[65px] lg:w-[9%] text-center'>Edit </div>
                    <div className='p-[20px] w-[65px] lg:w-[9%] text-center'>Post báo cáo</div>

                </div>
                <div className='px-[16px]'>
                    <div className='h-[480px] bg-white '>
                        {getCurrentPageData().map((items, index) => (
                            <div className='flex items-center border-b' key={index}>
                                <div className='p-[20px] w-[65px] lg:w-[9%] text-center text-[14px] text-[#576C8A] font-[400]'>{items.stt}</div>
                                <div className='p-[20px] w-[65px] lg:w-[9%] text-center text-[14px] text-[#576C8A] font-[400]'>{items.title}</div>
                                <div className='p-[20px] w-[65px] lg:w-[18%] text-center text-[14px] text-[#576C8A] font-[400] truncate'>{items.des}</div>
                                <a href={items.url} className='p-[20px] w-[65px] lg:w-[9%] text-center text-[14px] text-[#576C8A] font-[400] hover:underline'>Link</a>
                                <div className='p-[20px] w-[65px] lg:w-[9%]'><Image src={items.thumb} alt='' width={400} height={400} /></div>
                                <div className='p-[20px] w-[65px] lg:w-[9%] text-center text-[14px] text-[#576C8A] font-[400] truncate'>{items.sevices}</div>
                                <div className='p-[20px] w-[65px] lg:w-[9%] text-center text-[14px] text-[#576C8A] font-[400]'>{items.date}</div>
                                <div className='p-[20px] w-[65px] lg:w-[9%] text-center text-[14px] text-[#576C8A] font-[400]'>{items.verify}</div>
                                <div className='p-[20px] w-[65px] lg:w-[9%] text-center text-[14px] text-[#576C8A] font-[400]'>{items.status}</div>
                                <div className='p-[20px] w-[65px] lg:w-[9%] flex justify-center text-[14px] text-[#576C8A] font-[400] cursor-pointer'><BsFillPencilFill /></div>
                                <div className='p-[20px] w-[65px] lg:w-[9%] text-center text-[14px] text-[#576C8A] font-[400]'>{items.report}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex lg:justify-center ml-[48px] lg:ml-0 w-full items-center h-[80px] text-[14px] font-[600] text-[#343944]'>
                    <CustomPagination
                        current={currentPage}
                        pageSize={itemsPerPage}
                        total={data.length}
                        onChange={(page) => setCurrentPage(page)}
                    />
                </div>
            </div>
            <Model isOpen={isModalOpen} onClose={closeModal}>
                <div className='w-[400px] h-[400px] bg-[#FFFDDA] flex flex-col items-center justify-center'>
                    <form className='w-[400px]'>
                        <div className='flex  mb-3'>
                            <label htmlFor="" className='w-[20%]'>Tiêu đề</label>
                            <input className='w-[80%] h-[40px] p-2 border border-[#F9D916]' type="text" />
                        </div>
                        <div className='flex  mb-3'>
                            <label htmlFor="" className='w-[20%]'>Mô tả</label>
                            <input className='w-[80%] h-[40px] p-2 border border-[#F9D916]' type="text" />
                        </div>
                        <div className='flex  mb-3'>
                            <label htmlFor="" className='w-[20%]'>URL</label>
                            <input className='w-[80%] h-[40px] p-2 border border-[#F9D916]' type="text" />
                        </div>
                        <div className='flex  mb-3'>
                            <label htmlFor="" className='w-[20%]'>Thumb</label>
                            <div className='w-[80%]'>
                                <InputFile
                                    setImageUrl={(url) => {
                                        if (url) {
                                            setThumb(url);
                                        }
                                    }}
                                />
                            </div>
                        </div>
                        <div className='flex justify-between mb-5   '>
                            <label htmlFor="" className='w-[20%]'>Gói dịch vụ</label>
                            <select className=' h-[40px] border border-[#F9D916]' name="" id="">
                                <option value="">Chọn gói youtube</option>
                            </select>
                            <select className=' h-[40px] border border-[#F9D916]' name="" id="">
                                <option value="">Chọn gói facebook </option>
                            </select>
                        </div>
                        <div className='w-full flex justify-center'><div className='px-[22px] py-[8px] w-[132px] text-center bg-[#F9D916] text-[17px] rounded-[5px]' >Thêm</div></div>
                    </form>
                </div>
            </Model>
        </div>
    );
}
