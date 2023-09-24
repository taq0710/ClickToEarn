import Header from '@/components/layout/header';
import MissionHistory from '@/components/pageComponent/missionhistory';
import * as React from 'react';

export interface IMissionHistoryPageProps {
}

export default function MissionHistoryPage(props: IMissionHistoryPageProps) {
  return (
    <div>
      <Header />
      <MissionHistory />
    </div>
  );
}
