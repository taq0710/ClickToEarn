import * as React from 'react';
import { BsFillPencilFill } from 'react-icons/bs';

export interface IAccountManagementProps {
}

export default function AccountManagement(props: IAccountManagementProps) {
    const [isEditingPass, setIsEditingPass] = React.useState(false);
    const [isEditingName, setIsEditingName] = React.useState(false);
    const [isEditingNumber, setIsEditingNumber] = React.useState(false);
    const [isEditingAdress, setIsEditingAdress] = React.useState(false);
    const [isEdited, setIsEdited] = React.useState(false);
    const handleEditPassClick = () => {
        setIsEditingPass(true);
        setIsEdited(true)
    };
    const handleEditNameClick = () => {
        setIsEditingName(true);
        setIsEdited(true)
    };
    const handleEditNumberClick = () => {
        setIsEditingNumber(true);
        setIsEdited(true)
    };
    const handleEditAdressClick = () => {
        setIsEditingAdress(true);
        setIsEdited(true)
    }
    const handleUpdateClick = () => {
        if (isEdited) {
            setIsEdited(false);
        }
    };

    return (
        <div className='w-[80%]'>
            <div className='text-center mt-[30px] text-xl font-semibold'>QUẢN LÝ ACCOUNT</div>
            <div className='flex justify-center mt-[80px]'>
                <div className='w-[50%] flex flex-col gap-5'>
                    <div className='flex gap-3 items-center'>
                        <label className='w-[20%]' htmlFor="">Email</label>
                        <input
                            type="email"
                            disabled
                            value="example@gmail.com"
                            className={`border px-5 py-2 w-[60%] cursor-not-allowed`}
                        />
                    </div>
                    <div className='flex gap-3 items-center'>
                        <label className='w-[20%]' htmlFor="">Password</label>
                        {isEditingPass ? (
                            <input type="password" className='border px-5 py-2 w-[60%]' />
                        ) : (
                            <>
                                <input type="password" disabled className='border px-5 py-2 w-[60%]' />
                                <BsFillPencilFill onClick={handleEditPassClick} className="cursor-pointer" />
                            </>
                        )}
                    </div>
                    <div className='flex gap-3 items-center'>
                        <label className='w-[20%]' htmlFor="">Full name</label>
                        {isEditingName
                            ?
                            <input type="text" className='border px-5 py-2 w-[60%]' />
                            :
                            <>
                                <input type="text" disabled className='border px-5 py-2 w-[60%]' />
                                <BsFillPencilFill onClick={handleEditNameClick} className="cursor-pointer" />
                            </>

                        }
                    </div>
                    <div className='flex gap-3 items-center'>
                        <label className='w-[20%]' htmlFor="">SĐT</label>
                        {isEditingNumber
                            ?
                            <input type="text" className='border px-5 py-2 w-[60%]' />
                            :
                            <>
                                <input type="text" disabled className='border px-5 py-2 w-[60%]' />
                                <BsFillPencilFill onClick={handleEditNumberClick} className="cursor-pointer" />
                            </>
                        }
                    </div>
                    <div className='flex gap-3 items-center'>
                        <label className='w-[20%]' htmlFor="">Địa chỉ</label>
                        {isEditingAdress
                            ?
                            <input type="text" className='border px-5 py-2 w-[60%]' />
                            :
                            <>
                                <input type="text" disabled className='border px-5 py-2 w-[60%]' />
                                <BsFillPencilFill onClick={handleEditAdressClick} className="cursor-pointer" />
                            </>
                        }
                    </div>
                </div>
            </div>
            <div className='flex justify-center mt-[50px]'>
                <div
                    onClick={handleUpdateClick}
                    className={`font-semibold text-lg px-4 py-3 border text-center w-[180px] rounded-md ${isEdited ? 'bg-[#F9D916] hover:bg-[#FFFDDA] cursor-pointer ' : 'bg-gray-300 cursor-not-allowed'
                        }`}
                >
                    Update
                </div>
            </div>
        </div>
    );
}
