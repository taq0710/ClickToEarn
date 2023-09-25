import React, { ReactNode } from 'react';

export interface LayoutAuthProps {
    children: ReactNode
}

export default function LayoutAuth({ children }: LayoutAuthProps) {
    return (
        <section className='bg-gray-200  '>
            <div className='max-w-[540px] mx-auto my-0 h-screen bg-white flex flex-col gap-4'>
                {children}
            </div>
        </section>
    );
}