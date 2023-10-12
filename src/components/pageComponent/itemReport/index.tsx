import React from 'react';

export default function ItemReport() {
  return (
    <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:border-gray-700 sm:p-6 dark:bg-gray-800">
      <div className="w-full">
        <h3 className="text-base font-normal text-gray-500 dark:text-gray-400">
          New products
        </h3>
        <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white">
          2,340
        </span>
        <p className="flex items-center text-base font-normal text-gray-500 dark:text-gray-400">
          <span className="flex items-center mr-1.5 text-sm text-green-500 dark:text-green-400">
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"
              ></path>
            </svg>
            12.5%
          </span>
          Since last month
        </p>
      </div>
      <div className="w-full min-h-20" id="new-products-chart">
        <div
          id="apexchartsw1h07uzi"
          className="w-46 h-35 apexcharts-canvas apexchartsw1h07uzi apexcharts-theme-light"
        >
          <div className="max-h-18 apexcharts-legend"></div>
          <div className="apexcharts-tooltip apexcharts-theme-light">
            <div className="font-sans text-sm apexcharts-tooltip-title"></div>
            <div className="order-1 apexcharts-tooltip-series-group">
              <span className="bg-gray-700 apexcharts-tooltip-marker"></span>
              <div className="font-sans text-sm apexcharts-tooltip-text">
                <div className="apexcharts-tooltip-y-group">
                  <span className="apexcharts-tooltip-text-y-label"></span>
                  <span className="apexcharts-tooltip-text-y-value"></span>
                </div>
                <div className="apexcharts-tooltip-goals-group">
                  <span className="apexcharts-tooltip-text-goals-label"></span>
                  <span className="apexcharts-tooltip-text-goals-value"></span>
                </div>
                <div className="apexcharts-tooltip-z-group">
                  <span className="apexcharts-tooltip-text-z-label"></span>
                  <span className="apexcharts-tooltip-text-z-value"></span>
                </div>
              </div>
            </div>
          </div>
          <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
            <div className="apexcharts-yaxistooltip-text"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
