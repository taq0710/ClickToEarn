import * as React from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai'
export interface IItemHistoryProps {
  description: string,
  tagId: string,
  price: number,
  time: string

}

export default function ItemHistory({ description, tagId, price, time }: IItemHistoryProps) {
  return (
    <div className='flex flex-col gap-3'>
      <div className='bg-[#FFFDDA] p-[15px] rounded-[5px] h-[93px]'>
        <div className='text-[16px] flex flex-col justify-between h-full'>
          <div className=' line-clamp-2 '>{description} </div>
          <div className='flex justify-between'>
            <div>{tagId}</div>
            <div className='text-[#F6BD13]'>+{price}đ</div>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-end text-xs'>
        <div><AiOutlineCheckCircle /></div>
        <div>{time}</div>
      </div>
    </div>
  );
}
