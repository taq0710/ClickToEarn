"use client"
import CustomPagination from '@/components/common/CustomPanigation';
import Image from 'next/image';
import * as React from 'react';

export interface IPayManagementProps {
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
export default function PayManagement(props: IPayManagementProps) {
    const [currentPage, setCurrentPage] = React.useState(1);
    const itemsPerPage = 5;

    const getCurrentPageData = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return data.slice(startIndex, endIndex);
    };
    return (
        <div className='w-[80%] px-4'>
            <div className='text-center mt-[30px] text-xl font-semibold'>THANH TOÁN</div>
            <div className=' lg:w-full w-[650px] bg-[#F4F4F4] mt-[52px] mb-[80px] rounded-[8px] '>
                <div className='flex px-[16px] text-[14px] font-[600] text-[#4D515B] items-center'>
                    <div className='p-[20px] w-[65px] lg:w-[14%] text-center'>STT</div>
                    <div className='p-[20px] w-[65px] lg:w-[14%] text-center'>ID Hóa đơn </div>
                    <div className='p-[20px] w-[65px] lg:w-[14%] text-center'>Số tiền</div>
                    <div className='p-[20px] w-[65px] lg:w-[14%] text-center'>Trạng thái</div>
                    <div className='p-[20px] w-[65px] lg:w-[14%] text-center'>Ngày</div>
                    <div className='p-[20px] w-[65px] lg:w-[14%] text-center'>Hình ảnh bill</div>
                    <div className='p-[20px] w-[65px] lg:w-[14%] text-center'>Hành động</div>
                </div>
                <div className='px-[16px]'>
                    <div className='h-[480px] bg-white '>
                        {getCurrentPageData().map((items, index) => (
                            <div className='flex items-center border-b' key={index}>
                                <div className='p-[20px] w-[65px] lg:w-[14%] text-center text-[14px] text-[#576C8A] font-[400]'>{items.stt}</div>
                                <div className='p-[20px] w-[65px] lg:w-[14%] text-center text-[14px] text-[#576C8A] font-[400]'>{items.title}</div>
                                <div className='p-[20px] w-[65px] lg:w-[14%] text-center text-[14px] text-[#576C8A] font-[400] truncate'>{items.des}</div>
                                <div className='p-[20px] w-[65px] lg:w-[14%] text-center text-[14px] text-[#576C8A] font-[400] truncate'>{items.sevices}</div>
                                <div className='p-[20px] w-[65px] lg:w-[14%] text-center text-[14px] text-[#576C8A] font-[400]'>{items.date}</div>
                                <div className='p-[20px] w-[65px] lg:w-[14%]'><Image src={items.thumb} alt='' width={400} height={400} /></div>
                                <div className='p-[20px] w-[65px] lg:w-[14%] text-center text-[14px] text-[#576C8A] font-[400]'>{items.verify}</div>

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
        </div>
    );
}
