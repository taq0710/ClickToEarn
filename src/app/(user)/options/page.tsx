import Options from '@/components/pageComponent/options';
import * as React from 'react';

export interface IOptionPageProps {
}

export default function OptionPage (props: IOptionPageProps) {
  return (
    <div>
      <Options level={1} totalCoinsUplevel={2} userCoins={1}  />
    </div>
  );
}

