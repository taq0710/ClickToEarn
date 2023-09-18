import Withdraw from '@/components/pageComponent/withdraw';
import * as React from 'react';

export interface IWithdrawPageProps {
}

export default function WithdrawPage(props: IWithdrawPageProps) {
    return (
        <div>
            <Withdraw />
        </div>
    );
}
