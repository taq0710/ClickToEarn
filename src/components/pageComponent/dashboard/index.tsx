"use client"
import * as React from 'react';
import ServiceManagement from './ServiceManagement';
import SidebarDashBoard from './SideBar';
import AccountManagement from './AccoutManagement';
import PayManagement from './PayManagement';
import Services from './Services';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { getItemLocalStorage } from '@/utils/localStorageUtil';
import { getUserInfo } from '@/redux/features/auth/authSlice';
import { useRouter } from 'next/navigation';

export interface IDashBoardProps {
}

export default function DashBoard(props: IDashBoardProps) {
    const dispatch = useAppDispatch()
    const useInfo = useAppSelector((state) => state.login)
    const token = getItemLocalStorage("token")
    React.useEffect(() => {
        if (token) {
            dispatch(getUserInfo())
        }
    })
    const router = useRouter()
    // React.useEffect(() => {
    //     if (useInfo?.info.role !== "agency") {
    //         router.push("/agency/login")
    //     }
    // })
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
        <div className='flex'>
            <SidebarDashBoard activeTab={activeTab} onTabClick={handleTabClick} />
            {tabContents[activeTab]}
        </div>
    );
}
