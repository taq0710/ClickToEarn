"use client"
import { useState } from 'react';
import { BsChevronRight } from "react-icons/bs"
import { MdAddCircleOutline } from "react-icons/md"
import Model from './model';
import { IoMdPersonAdd } from "react-icons/io"
import { BsFillDatabaseFill } from "react-icons/bs"
export interface IWithdrawProps {
}

export default function Withdraw(props: IWithdrawProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState('')
    const [accountNumber, setAccountNumber] = useState<number>();
    const [accountName, setAccountName] = useState("");
    const [inputMoney, setInputMoney] = useState()
    const [displayedValue, setDisplayedValue] = useState(0)
    const [withdrawalFee, setWithdrawalFee] = useState<number | undefined>(0);
    const [remainingAmount, setRemainingAmount] = useState<number | undefined>(0)
    const [accountNameValue, setAccountNameValue] = useState("")
    const [accountNumberValue, setAccountNumberValue] = useState()

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleInputMoneyChange = (event: any) => {
        const inputMoney = event.target.value
        setInputMoney(inputMoney)
        setDisplayedValue(inputMoney)
        const fee = ((inputMoney) * 5 / 100);
        setWithdrawalFee(fee);
        const remaining = ((inputMoney) - fee)
        setRemainingAmount(remaining)
    }
    const handleSubmit = (event: any) => {
        setSelectedValue(event.target.value)
        setAccountNumber(event.target.value)
        setAccountName(event.target.value)
    }
    return (
        <div>
            <div className='flex flex-col justify-center gap-[40px] mx-4 '>
                <div className='flex justify-center'>
                    <div className='text-base font-semibold px-[10px] py-[5px] bg-[#FDF2B4] rounded-[20px] w-[173px] text-center'>Thông tin rút tiền</div>
                </div>
                <div className='flex items-center justify-between'>
                    <div className='flex w-[130px] h-[29px] items-center justify-center border border-[#FDF2B4] font-semibold'>Số tiền rút</div>
                    <div><BsChevronRight /></div>
                    <div className='flex w-[130px] h-[29px] items-center justify-center border border-[#FDF2B4]'>{displayedValue}đ</div>
                </div>
                <div className='flex items-center justify-between'>
                    <div className='flex w-[130px] h-[29px] items-center justify-center border border-[#FDF2B4] font-semibold'>Phí rút tiền 5%</div>
                    <div><BsChevronRight /></div>
                    <div className='flex w-[130px] h-[29px] items-center justify-center border border-[#FDF2B4]'>{withdrawalFee}đ</div>
                </div>
                <div className='flex justify-center'>
                    <div className='text-base font-semibold px-[10px] py-[5px] bg-[#FDF2B4] rounded-[20px] w-[233px] text-center'>Tổng số tiền nhận được</div>
                </div>
                <div className='flex justify-center'>
                    <div className='text-2xl font-semibold px-[10px] py-[5px] bg-[#F6BD13] rounded-[5px] w-[195px] text-center'>{remainingAmount}đ</div>
                </div>
                <div className='flex gap-3 items-center'>
                    {accountNameValue &&
                        <div className='bg-[#FFFDDA] w-[150px] p-4'>
                            <div>{accountNameValue}</div>
                            <div>{accountNumberValue}</div>
                        </div>
                    }
                </div>

            </div>
            <div onClick={openModal} className='text-[#F6BD13] text-[16px] flex items-center gap-1 ml-5 py-2'>
                <div>Thêm tài khoản</div>
                <div><MdAddCircleOutline /></div>
            </div>
            <div className='relative w-full flex justify-center mb-[5px]'>
                <input
                    className='w-[95%] rounded-[8px] border-[2px] border-[#F9D916] px-5 h-[48px] text-[14px] md:text-[16px] outline-none hover:border-neutral3 focus:border-yellow-500'
                    type="text"
                    placeholder='Nhập/ Chọn tài khoản nhận VND'

                />
                <div className="absolute inset-y-0 right-5 flex items-center justify-center w-8">
                    <button
                        type="button"
                        className="focus:outline-none text-neutral-500"

                    >
                        <IoMdPersonAdd className='text-[#F9D916] text-xl' />

                    </button>
                </div>
            </div>
            <label className='text-[#F6BD13] text-[16px] flex gap-2 ml-5 py-2' htmlFor="">Thông tin giao dịch <BsFillDatabaseFill /></label>
            <div className='w-full flex justify-center mb-[100px]'><input type="number" placeholder='Nhập số tiền' value={inputMoney} onChange={handleInputMoneyChange} className='w-[95%] rounded-[8px] border-[2px] border-[#F9D916] px-5 h-[48px] text-[14px] md:text-[16px] outline-none hover:border-neutral3 focus:border-yellow-500' /></div>
            <div className='flex justify-center items-start'><div className='w-[195px] py-[20px] text-center rounded-[30px] text-[16px] font-semibold text-white bg-[#F6BD13]'>Yêu cầu rút tiền</div></div>
            <Model isOpen={isModalOpen} onClose={closeModal}>
                <div className='w-[341px] h-[339px] bg-[#FFFDDA] flex flex-col items-center justify-center'>
                    <form className='w-[300px] flex flex-col gap-10 items-center'>
                        <select className='w-[258px] h-[40px] border border-[#F9D916]' name="" id="">
                            <option value="">Chọn ngân hàng</option>
                        </select>
                        <input className='w-[258px] h-[40px] p-2 border border-[#F9D916]' type="number" placeholder='Số tài khoản' />
                        <input className='w-[258px] h-[40px] p-2 border border-[#F9D916]' type="text" placeholder='Họ và tên' />
                        <div className='px-[22px] py-[8px] w-[132px] text-center bg-[#F9D916] text-[17px] rounded-[5px]' onClick={handleSubmit}>Thêm</div>
                    </form>
                </div>
            </Model>
        </div>
    );
}
