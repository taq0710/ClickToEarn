import Mission from '@/components/pageComponent/mission/missions';
import React,{useState, useEffect} from 'react';
export interface  MissionsPageProps {
}
export default async function MissionsPage (props:  MissionsPageProps) {
  return (
    <Mission/>
  );
}
