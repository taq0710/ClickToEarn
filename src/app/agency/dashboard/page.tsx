"use client"
import DashBoard from '@/components/pageComponent/dashboard';
import { getUser, selectInfor } from '@/redux/features/user/userSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { getItemLocalStorage } from '@/utils/localStorageUtil';
import { useRouter } from 'next/navigation';
import * as React from 'react';

export interface IDashboardPageProps {
}

export default function DashboardPage(props: IDashboardPageProps) {
    // const dispatch = useAppDispatch()
    // const router = useRouter()
    // const useInfo = useAppSelector(selectInfor)
    // const token = getItemLocalStorage("accesstoken")
    // React.useEffect(() => {
    //     dispatch(getUser())
    // }, [dispatch])
    // if (!token && useInfo?.role !== "agency") {
    //     router.push("/agency/login")
    // }
    return (
        <div className="dark:bg-gray-900">
            <DashBoard />
        </div>
    );
}
