"use client";
import { getUser, selectInfor } from "@/redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import * as React from "react";
import { BsFillPencilFill } from "react-icons/bs";

export interface IAccountManagementProps {}

export default function AccountManagement(props: IAccountManagementProps) {
  const [isEditingPass, setIsEditingPass] = React.useState(false);
  const [isEditingName, setIsEditingName] = React.useState(false);
  const [isEditingNumber, setIsEditingNumber] = React.useState(false);
  const [isEditingAddress, setIsEditingAddress] = React.useState(false);
  const [isEdited, setIsEdited] = React.useState(false);
  const dispatch = useAppDispatch();
  const use = useAppSelector(selectInfor);
  React.useEffect(() => {
    dispatch(getUser());
  }, []);
  const handleEditPassClick = () => {
    setIsEditingPass(true);
    setIsEdited(true);
  };
  const handleEditNameClick = () => {
    setIsEditingName(true);
    setIsEdited(true);
  };
  const handleEditNumberClick = () => {
    setIsEditingNumber(true);
    setIsEdited(true);
  };
  const handleEditAddressClick = () => {
    setIsEditingAddress(true);
    setIsEdited(true);
  };
  const handleUpdateClick = () => {
    if (isEdited) {
      setIsEdited(false);
    }
  };

  return (
    <div className="w-[80%]">
      <div className="text-center mt-[30px] text-xl font-semibold dark:text-white">
        QUẢN LÝ ACCOUNT
      </div>
      <div className="flex justify-center mt-[80px]">
        <div className="w-[50%] flex flex-col gap-5">
          <div className="flex gap-3 items-center">
            <label className="w-[20%] dark:text-white" htmlFor="">
              Email
            </label>
            <input
              type="email"
              disabled
              value={use?.email}
              className={`border px-5 py-2 w-[60%] cursor-not-allowed`}
            />
          </div>
          <div className="flex gap-3 items-center">
            <label className="w-[20%] dark:text-white" htmlFor="">
              Password
            </label>
            {isEditingPass ? (
              <input type="password" className="border px-5 py-2 w-[60%]" />
            ) : (
              <>
                <input
                  type="password"
                  disabled
                  className="border px-5 py-2 w-[60%]"
                />
                <BsFillPencilFill
                  onClick={handleEditPassClick}
                  className="cursor-pointer dark:text-white"
                />
              </>
            )}
          </div>
          <div className="flex gap-3 items-center">
            <label className="w-[20%] dark:text-white" htmlFor="">
              Full name
            </label>
            {isEditingName ? (
              <input
                value={use?.fullName}
                type="text"
                className="border px-5 py-2 w-[60%]"
              />
            ) : (
              <>
                <input
                  value={use?.fullName}
                  type="text"
                  disabled
                  className="border px-5 py-2 w-[60%]"
                />
                <BsFillPencilFill
                  onClick={handleEditNameClick}
                  className="cursor-pointer dark:text-white"
                />
              </>
            )}
          </div>
          <div className="flex gap-3 items-center">
            <label className="w-[20%] dark:text-white" htmlFor="">
              SĐT
            </label>
            {isEditingNumber ? (
              <input
                value={use?.email}
                type="text"
                className="border px-5 py-2 w-[60%]"
              />
            ) : (
              <>
                <input
                  value={use?.email}
                  type="text"
                  disabled
                  className="border px-5 py-2 w-[60%]"
                />
                <BsFillPencilFill
                  onClick={handleEditNumberClick}
                  className="cursor-pointer dark:text-white"
                />
              </>
            )}
          </div>
          <div className="flex gap-3 items-center">
            <label className="w-[20%] dark:text-white" htmlFor="">
              Địa chỉ
            </label>
            {isEditingAddress ? (
              <input
                value={use?.location}
                type="text"
                className="border px-5 py-2 w-[60%]"
              />
            ) : (
              <>
                <input
                  value={use?.location}
                  type="text"
                  disabled
                  className="border px-5 py-2 w-[60%]"
                />
                <BsFillPencilFill
                  onClick={handleEditAddressClick}
                  className="cursor-pointer dark:text-white"
                />
              </>
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-[50px]">
        <div
          onClick={handleUpdateClick}
          className={`font-semibold text-lg px-4 py-3 border text-center w-[180px] rounded-md ${
            isEdited
              ? "bg-[#F9D916] hover:bg-[#FFFDDA] cursor-pointer "
              : "bg-gray-300 cursor-not-allowed "
          }`}
        >
          Update
        </div>
      </div>
    </div>
  );
}
