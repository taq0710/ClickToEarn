import CTECardSkeleton from '@/components/common/CTECardSkeleton';
import * as React from 'react';

export interface LoadingProps {
}

export default function Loading (props: LoadingProps) {
  return (
    <div className='flex flex-col '>
      <CTECardSkeleton/>
      <CTECardSkeleton/>
    </div>
  );
}
