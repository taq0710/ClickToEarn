import Register from '@/components/pageComponent/register';
import * as React from 'react';

export interface IRegisterPageProps {
}

export default function RegisterPage(props: IRegisterPageProps) {
    return (
        <div>
            <Register />
        </div>
    );
}
