"use client"
import { Skeleton, Space } from 'antd';
import * as React from 'react';
import styles from './style.module.scss'
export interface  CTECardSkeletonProps {
}

export default function CTECardSkeleton (props:  CTECardSkeletonProps) {
  return (
    <Space className={styles.skeleton}>
        <Space className={styles.containerRatio}>
          <Skeleton.Image active/>
        </Space>
        <Skeleton.Input active/>
        <Space.Compact block className={styles.contentWrapper}>
          <Skeleton.Input block active className={styles.content}/>
          <Skeleton.Button className={styles.button}/>
        </Space.Compact>
    </Space>
  );
}
