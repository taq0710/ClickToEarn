import ItemHistory from '@/components/pageComponent/itemHistory';
import * as React from 'react';
const dataHistory = [
  {
    date: "01-09-2023",
    data: [
      {
        description: "Click vào video Khoa Bup có 1000 Bitcoin Click vào video Khoa Bup có 1000 Bitcoin",
        tagId: "#132132",
        price: 1000,
        time: "10:00"
      },
      {
        description: "Click vào video Khoa Bup có 1000 Bitcoin Click vào video Khoa Bup có 1000 Bitcoin",
        tagId: "#132132",
        price: 1000,
        time: "10:00"
      },
      {
        description: "Click vào video Khoa Bup có 1000 Bitcoin Click vào video Khoa Bup có 1000 Bitcoin",
        tagId: "#132132",
        price: 1000,
        time: "10:00"
      },
    ]
  },
  {
    date: "01-09-2023",
    data: [
      {
        description: "Click vào video Khoa Bup có 1000 Bitcoin Click vào video Khoa Bup có 1000 Bitcoin",
        tagId: "#132132",
        price: 1000,
        time: "10:00"
      },
      {
        description: "Click vào video Khoa Bup có 1000 Bitcoin Click vào video Khoa Bup có 1000 Bitcoin",
        tagId: "#132132",
        price: 1000,
        time: "10:00"
      },
      {
        description: "Click vào video Khoa Bup có 1000 Bitcoin Click vào video Khoa Bup có 1000 Bitcoin",
        tagId: "#132132",
        price: 1000,
        time: "10:00"
      },
    ]
  }, {
    date: "01-09-2023",
    data: [
      {
        description: "Click vào video Khoa Bup có 1000 Bitcoin Click vào video Khoa Bup có 1000 Bitcoin",
        tagId: "#132132",
        price: 1000,
        time: "10:00"
      },
      {
        description: "Click vào video Khoa Bup có 1000 Bitcoin Click vào video Khoa Bup có 1000 Bitcoin",
        tagId: "#132132",
        price: 1000,
        time: "10:00"
      },
      {
        description: "Click vào video Khoa Bup có 1000 Bitcoin Click vào video Khoa Bup có 1000 Bitcoin",
        tagId: "#132132",
        price: 1000,
        time: "10:00"
      },
    ]
  }
]
export interface IMissionHistoryPageProps {
}

export default function MissionHistoryPage(props: IMissionHistoryPageProps) {
  return (
    <div>
      <div className='flex flex-col justify-center mx-4 '>
        <div className='flex justify-center'>
          <div className='text-base font-semibold px-[10px] py-[5px] bg-[#FDF2B4] border-[#FEF8D5] rounded-[20px] w-[173px] text-center'>Lịch sử nhiệm vụ</div>
        </div>
        <div className='overflow-y-scroll no-scrollbar max-h-[950px]'>
          {dataHistory.map((items, index) => (
            <div key={index} className='flex flex-col gap-[6px] mt-[6px]'>
              <div className=' px-[10px] text-center py-[3px] border text-[12px] border-[#F9D916] w-[89px] rounded-[30px]'>{items.date}</div>
              {items.data.map((item, index) => (
                <ItemHistory key={index} description={item.description} price={item.price} tagId={item.tagId} time={item.time} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
