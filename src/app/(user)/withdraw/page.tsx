import Header from '@/components/layout/header';
import Withdraw from '@/components/pageComponent/withdraw';
import * as React from 'react';

export interface IWithdrawPageProps {
}

export default function WithdrawPage(props: IWithdrawPageProps) {
    return (
        <div>
            <Header />
            <Withdraw />
        </div>
    );
}
