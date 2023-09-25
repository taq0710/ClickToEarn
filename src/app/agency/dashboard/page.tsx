
import DashBoard from '@/components/pageComponent/dashboard';
import * as React from 'react';

export interface  IDashboardPageProps {
}

export default function DashboardPage(props: IDashboardPageProps) {
    return (
        <div>
            <DashBoard />
        </div>
    );
  }
