"use client"
import Login from '@/components/pageComponent/login';
import { getItemLocalStorage } from '@/utils/localStorageUtil';
import { useRouter } from 'next/navigation';
import * as React from 'react';
export interface ILoginAgencyPageProps {
}

export default function LoginAgencyPage(props: ILoginAgencyPageProps) {
    const accesstoken = getItemLocalStorage("accesstoken")
    const router = useRouter()
    if (accesstoken) {
        router.push("/agency/dashboard")
    }

    return (
        <div>
            <Login />
        </div>
    );
}
