import Image from 'next/image';
import * as React from 'react';
import Prev from '/public/images/arrow-left.svg'
import Next from '/public/images/arrow-right.svg'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
interface CustomPaginationProps {
    current: number;
    pageSize: number;
    total: number;
    onChange: (page: number) => void;
}
const calculatePageNumbers = (current: number, totalPages: number, maxVisiblePages: number) => {
    let startPage = Math.max(1, current - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

    if (endPage - startPage + 1 < maxVisiblePages) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    return Array.from({ length: endPage - startPage + 1 }, (_, index) => index + startPage);
};

export default function CustomPagination({ current, pageSize, total, onChange }: CustomPaginationProps) {
    const totalPages = Math.ceil(total / pageSize);
    const maxVisiblePages = 4;
    const pageNumbers = calculatePageNumbers(current, totalPages, maxVisiblePages);

    const handlePageClick = (page: number) => {
        onChange(page);
    };

    const handlePreviousClick = () => {
        if (current > 1) {
            onChange(current - 1);
        }
    };

    const handleNextClick = () => {
        if (current < totalPages) {
            onChange(current + 1);
        }
    };

    return (
        <div className='flex justify-between'>
            <button onClick={handlePreviousClick} disabled={current === 1} className='cursor-pointer'>
                <GrFormPrevious />
            </button>
            {pageNumbers.map((pageNumber) => (
                <button
                    key={pageNumber}
                    onClick={() => handlePageClick(pageNumber)}
                    className={`cursor-pointer w-[36px] mx-[3px] h-[36px] rounded-[6px]  border-2 ${pageNumber === current ? 'bg-[#F4F4F4] border-[#3786FB] text-[#3786FB]' : 'border-[#CCCDD0]'}`}
                >
                    {pageNumber}
                </button>
            ))}
            <button onClick={handleNextClick} disabled={current === totalPages} className='cursor-pointer'>
                <GrFormNext />
            </button>
        </div>
    );
};


