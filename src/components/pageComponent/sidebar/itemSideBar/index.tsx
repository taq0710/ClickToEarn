import React from 'react';

export interface ItemSideBarProps {
  title: string;
  path: string;
}

export default function ItemSidebar({ title, path }: ItemSideBarProps) {
  return (
    <>
      <li>
        <a
          href={path}
          className="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700"
        >
          <span className="ml-3" sidebar-toggle-item="">
            {title}
          </span>
        </a>
      </li>
    </>
  );
}
