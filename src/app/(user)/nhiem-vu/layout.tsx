
import CTEHeading from '@/components/common/CTEHeading';
import Footer from '@/components/layout/footer';
import { Metadata } from 'next';
import React, { ReactNode } from 'react';

export interface  MissionPageProps {
  missions:ReactNode,
  news:ReactNode,
  children:ReactNode
}
export const metadata: Metadata = {
  title: 'Mission',
  description: '',
}

export default function MissionPage ({missions,news,children}:  MissionPageProps) {
  return (
    <div className='px-4 h-full overflow-scroll no-scrollbar'>
      <CTEHeading>Nhiệm vụ ngày</CTEHeading>
      {missions}
      <CTEHeading className='mt-4'>Tin tức</CTEHeading>
      {news}
      <Footer />
    </div>
  );
}
