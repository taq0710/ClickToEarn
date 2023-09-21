import Login from '@/components/pageComponent/login';
import * as React from 'react';

export interface ILoginPageProps {
}

export default function LoginPage(props: ILoginPageProps) {
    return (
        <div>
            <Login />
        </div>
    );
}
