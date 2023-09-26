import React from 'react';
import NavBar from '@/components/pageComponent/navbar';
import SideBar from '@/components/pageComponent/sidebar';
import ReportTable from '@/components/pageComponent/reportTable';
import ItemReport from '@/components/pageComponent/itemReport';

export default function DashboardPage() {
  return (
    <div>
      <NavBar />
      <div className="flex pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900">
        <SideBar />
        <div className="relative w-full h-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900">
          <main>
            <div className="px-4 pt-4">
              <div className="grid w-full grid-cols-1 gap-4 mt-2 mb-2 xl:grid-cols-2 2xl:grid-cols-3">
                <ItemReport />
              </div>
              <ReportTable />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
