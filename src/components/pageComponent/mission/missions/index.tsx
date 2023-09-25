import * as React from 'react';
import MissionCard from './missionCard';

export interface MissionProps {}
const missionList = Array.from({ length: 3 }, () => ({
  image: '/images/mission-image.png',
  code: 123,
  coin: 1000,
  imageAlt: 'nhiệm vụ hằng ngày',
}));

export default function Mission(props: MissionProps) {
  return (
    <div className='flex flex-col gap-y-10 py-3'>
      {missionList.map((item, index) => (
        <MissionCard
          image={item.image}
          code={item.code}
          coin={item.coin}
          imageAlt={item.imageAlt}
          key={index}
        />
      ))}
    </div>
  );
}
