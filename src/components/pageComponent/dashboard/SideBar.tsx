import { useRouter } from 'next/navigation';
import React from 'react';
import { BiSolidUserAccount } from 'react-icons/bi';
import { BsBoxSeam } from 'react-icons/bs';
import {
  MdOutlineMiscellaneousServices,
  MdOutlinePayment,
} from 'react-icons/md';

interface ISidebarDashBoardProps {
  activeTab: string;
  onTabClick: (title: string) => void;
}

const SidebarItems = [
  {
    title: 'Quản lý dịch vụ',
    icon: <MdOutlineMiscellaneousServices />,
  },
  {
    title: 'Quản lý account',
    icon: <BiSolidUserAccount />,
  },
  {
    title: 'Các gói dịch vụ',
    icon: <BsBoxSeam />,
  },
  {
    title: 'Thanh toán',
    icon: <MdOutlinePayment />,
  },
];

export default function SidebarDashBoard({
  activeTab,
  onTabClick,
}: ISidebarDashBoardProps) {
  const router = useRouter();
  const handleLogout = () => {
    localStorage.removeItem('accesstoken');
    router.push('/agency/login');
  };
  return (
    <div>
      <aside
        id="sidebar"
        className="flex flex-col flex-shrink-0 w-64 h-5/6 font-normal duration-75 lg:flex transition-width "
        aria-label="Sidebar"
      >
        <div className="flex flex-col h-full justify-between pt-5 pb-4 bg-white border-r border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex-1 px-3 space-y-1 bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
            <ul className="pb-2 space-y-2">
              {SidebarItems.map((item, index) => (
                <div
                  key={index}
                  className={` ${
                    activeTab === item.title
                      ? 'bg-gray-200 dark:bg-gray-600'
                      : ''
                  } flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700`}
                >
                  <div
                    className={`flex items-center p-3 gap-3 cursor-pointer `}
                    onClick={() => onTabClick(item.title)}
                  >
                    <div className="ml-3 dark:text-white">{item.icon}</div>
                    <div className="text-lg">{item.title}</div>
                  </div>
                </div>
              ))}
            </ul>
          </div>
          <button
            onClick={handleLogout}
            className="dark:text-gray-600 border dark:border-gray-600 p-3 rounded-md mx-4 hover:bg-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Đăng Xuất
          </button>
        </div>
      </aside>
    </div>
  );
}
