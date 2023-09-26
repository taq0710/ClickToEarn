import Image from 'next/image';
import React from 'react';
import Logomain from '/public/Images/logomain.png';
import { HiOutlineSearch } from 'react-icons/hi';
import { IoNotificationsOutline } from 'react-icons/io5';

export default function NavBar() {
  return (
    <>
      <nav className="fixed z-30 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <a href="#" className="flex ml-2 md:mr-28">
                <Image src={Logomain} className="w-auto h-8 mr-3" alt="Logo" />
              </a>
              <form
                action="#"
                method="GET"
                className="hidden lg:block lg:pl-3.5"
              >
                <label htmlFor="topbar-search" className="sr-only">
                  Search
                </label>
                <div className="relative mt-1 lg:w-96">
                  <div className="absolute text-gray-500 dark:text-gray-400 inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <HiOutlineSearch />
                  </div>
                  <input
                    type="text"
                    name="email"
                    id="topbar-search"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Search"
                  />
                </div>
              </form>
            </div>
            <div className="flex items-center">
              <button
                type="button"
                data-dropdown-toggle="notification-dropdown"
                className="p-2 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700"
              >
                <span className="sr-only">View notifications</span>
                <IoNotificationsOutline size={30} color="white" />
              </button>

              <div className="ml-2 text-sm text-white">Admin</div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
