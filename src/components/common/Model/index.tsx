import * as React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
export interface IModelProps {
  isOpen?: boolean;
  onClose?: () => void;
  children?: any;
}

export default function Model({ isOpen, onClose, children }: IModelProps) {
  return (
    isOpen && (
      <div className="absolute z-10 w-full max-h-[600px] top-2 m-auto flex flex-col items-center justify-center ">
        <div className="w-1/3 h-full pt-2 flex flex-col items-center justify-center ">
          {/* <div className=" bg-[#FFFFFFB2] backdrop-blur-[15px] dark:backdrop-blur-[10px]"></div> */}
          <div className="relative overflow-auto bg-white dark:bg-gray-700 w-full p-2 rounded-lg shadow-md border">
            <button
              className="absolute top-0 right-0 m-1 hover:bg-gray-300 rounded-full p-1 text-gray-600 hover:text-red-600 dark:text-white"
              onClick={onClose}
            >
              <AiOutlineClose className="text-xl " />
            </button>
            {children}
          </div>
        </div>
      </div>
    )
  );
}
