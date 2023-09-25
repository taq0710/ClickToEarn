import FlexCenter from '@/components/common/CTECenter';
import Image from 'next/image';
import * as React from 'react';
import Coin from '../missions/coin';
import moment from 'moment';
import { PiDivideBold } from 'react-icons/pi';

export interface NewsCardProps {
  image: string;
  code: number;
  coin: number;
  title: string;
  subTitle: string;
  createdAt: string;
  imageAlt?: string;
}

export default function NewsCard({
  image,
  code,
  coin,
  title,
  subTitle,
  createdAt,
  imageAlt = 'click to earn news',
}: NewsCardProps) {
  return (
    <FlexCenter className="flex-col font-inter">
      <div className="w-full h-fit flex flex-col gap-y-4 p-5 bg-[#FDF2B4] rounded-[20px]">
        <div className="w-full h-fit rounded-xl overflow-hidden">
          <Image alt={imageAlt} src={image} width={513} height={500} priority />
        </div>
        <div>
          <h3 className="text-truncate-2 font-semibold text-[1.2em]">
            {title}
          </h3>
          <FlexCenter className="justify-between">
            <div>
              <h5 className="font-medium text-[1.2em] text-truncate-1">
                {subTitle}
              </h5>
              <span className="text-[1em]">
                Ngày đăng: {moment(createdAt).format('DD/MM/YYYY')}
              </span>
            </div>
            <span className="uppercase rounded-full bg-primary6 py-1 px-4 font-medium 
            text-[1.1em] whitespace-nowrap">
              Code {code}
            </span>
          </FlexCenter>
        </div>
      </div>
      <FlexCenter className="gap-x-4 mt-4">
        <p className="text-[1.4em] font-bold m-0 uppercase">phần thưởng</p>
        <Coin amount={1000} variant="outline" />
      </FlexCenter>
    </FlexCenter>
  );
}
