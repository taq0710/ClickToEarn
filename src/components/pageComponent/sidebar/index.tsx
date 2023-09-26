import React from 'react';
import ItemSidebar from './itemSideBar';

export default function SideBar() {
  return (
    <div>
      <aside
        id="sidebar"
        className="fixed top-0 left-0 z-20 flex flex-col flex-shrink-0 hidden w-64 h-full pt-16 font-normal duration-75 lg:flex transition-width"
        aria-label="Sidebar"
      >
        <div className="relative flex flex-col flex-1 min-h-0 pt-0 bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
            <div className="flex-1 px-3 space-y-1 bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
              <ul className="pb-2 space-y-2">
                <ItemSidebar title="Dashboard" path="/admin" />
                <ItemSidebar title="Quản Lý Post" path="/admin/manager-post" />
                <ItemSidebar
                  title="Quản Lý Yêu Cầu"
                  path="/admin/manager-request"
                />
                <ItemSidebar
                  title="Quản Lý Doanh Thu"
                  path="/admin/manager-revenue"
                />
                <ItemSidebar
                  title="Quản Lý Agency"
                  path="/admin/manager-agency"
                />
                <ItemSidebar title="Quản Lý User" path="/admin/manager-user" />
                <ItemSidebar
                  title="Quản Lý Chung"
                  path="/admin/manager-general"
                />
              </ul>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
