import * as React from 'react';
import Image from 'next/image'
import errorImage from '/public/images/icons8-error-96.png'
import FlexCenter from '../CTECenter';
import Link from 'next/link'
export interface  CTEErrorProps {
  error?:string;
  backLink?:string;
  backLinkTitle?:string
}

export default function CTEError ({error,backLink,backLinkTitle}:  CTEErrorProps) {
  return (
    <FlexCenter className='w-full flex-col'>
      <Image
        alt='Click To Earn Error'
        src={errorImage}
      />
      {error&&(<div>
          <span className='py-2 font-medium text-lg'>{error}</span>
          {backLink && <Link href={backLink} className='text-primary6 font-medium text-lg'>{backLinkTitle}</Link>  }     
        </div>)}
    </FlexCenter>
  );
}
