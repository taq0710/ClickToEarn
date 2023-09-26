"use client"
import * as React from 'react';
import ServiceManagement from './ServiceManagement';
import SidebarDashBoard from './SideBar';
import AccountManagement from './AccoutManagement';
import PayManagement from './PayManagement';
import Services from './Services';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useRouter } from 'next/navigation';
import NavBar from '../navbar';
import { getUser, selectInfor } from '@/redux/features/user/userSlice';

export interface IDashBoardProps {
}

export default function DashBoard(props: IDashBoardProps) {
    const [activeTab, setActiveTab] = React.useState<string>("Quản lý dịch vụ");

    const handleTabClick = (title: string) => {
        setActiveTab(title);
    };
    const tabContents: Record<string, JSX.Element> = {
        "Quản lý dịch vụ": <ServiceManagement />,
        "Quản lý account": <AccountManagement />,
        "Các gói dịch vụ": <Services />,
        "Thanh toán": <PayManagement />,
    };
    return (
        <div className='h-screen'>
            <NavBar />
            <div className="flex pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900">
                <SidebarDashBoard activeTab={activeTab} onTabClick={handleTabClick} />
                <div className=" w-full h-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900">
                    <main>
                        <div className="px-4 pt-4">
                            <div className="grid w-full grid-cols-1 gap-4 mt-2 mb-2 xl:grid-cols-2 2xl:grid-cols-3">
                                {/* <ItemReport /> */}
                            </div>
                            {tabContents[activeTab]}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}
