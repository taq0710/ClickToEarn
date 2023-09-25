import * as React from 'react';
import NewsCard from './newsCard';

export interface  NewsProps {
}
const newsList = Array.from({ length: 3 }, () => ({
  image: '/images/crypto-image.jpg',
  imageAlt: 'Tin vắn Crypto 15/09: Bitcoin có khả năng hướng đến $ 30.000 trong ngắn hạn.',
  code: 123,
  coin: 1000,
  title:"Tin vắn Crypto 15/09: Bitcoin có khả năng hướng đến $ 30.000 trong ngắn hạn.",
  subTitle:"SSV Network, Solana, NFT",
  createdAt:new Date().toISOString()
}));

export default function News (props:  NewsProps) {
  return (
    <div className='flex flex-col gap-y-8 py-3 mb-3'>
      {newsList.map((item, index) => (
        <NewsCard
          image={item.image}
          code={item.code}
          coin={item.coin}
          title={item.title}
          subTitle={item.subTitle}
          createdAt={item.createdAt}
          imageAlt={item.imageAlt}
          key={index}
        />
      ))}
    </div>
  );
}
