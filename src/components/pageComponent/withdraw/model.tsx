import * as React from 'react';
import { AiOutlineClose } from "react-icons/ai"
export interface IModelProps {
    isOpen?: boolean;
    onClose?: () => void;
    children?: any;
}

export default function Model({ isOpen, onClose, children }: IModelProps) {
    return (
        <div>
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="fixed inset-0 bg-[#FFFFFFB2] backdrop-blur-[15px]"></div>
                    <div className="relative z-50 bg-[#FFFDDA] p-6 rounded-lg shadow-md">
                        <button
                            className="absolute top-0 right-0 m-3 hover:bg-gray-300 rounded-full p-1 text-gray-600 hover:text-red-600"
                            onClick={onClose}
                        >
                            <AiOutlineClose className="text-2xl " />
                        </button>
                        {children}
                    </div>
                </div>
            )}
        </div>
    );
}
