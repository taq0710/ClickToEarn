import * as React from 'react';
import Link from 'next/link'
export interface  NotFoundPageProps {
}

export default function NotFoundPage (props:  NotFoundPageProps) {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
