"use client"
import CTEError from '@/components/common/CTEError';
import * as React from 'react';

export interface  ErrorProps {
  error: Error
  reset: () => void
}

export default function Error ({
  error,
  reset,
}:  ErrorProps) {
  return (
    <CTEError error={error.message}/>
  );
}
