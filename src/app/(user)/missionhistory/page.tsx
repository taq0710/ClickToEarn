import MissionHistory from '@/components/pageComponent/missionhistory';
import * as React from 'react';

export interface IMissionHistoryPageProps {
}

export default function MissionHistoryPage(props: IMissionHistoryPageProps) {
  return (
    <div>
      <MissionHistory />
    </div>
  );
}
