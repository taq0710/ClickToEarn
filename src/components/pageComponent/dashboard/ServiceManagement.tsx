"use client";
import InputFile from "@/components/common/InputFile";
import InputVideo from "@/components/common/InputVideo";
import Model from "@/components/common/Model";
import Table from "@/components/common/TableComponent";
import ColumnTable from "@/components/common/TableComponent";
import {
  createPackAgency,
  editPackAgency,
  getPackAgency,
  selectAgency,
  selectedAgency,
} from "@/redux/features/agency/agencySlice";
import { AgencyResponse, IAgency } from "@/redux/features/agency/interfaces";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { uploadFile } from "@/utils/upload.api";
import { uploadFileVideo } from "@/utils/uploadVideo.api";
import Image from "next/image";
import * as React from "react";
import { BsFillPencilFill } from "react-icons/bs";
export interface IServiceManagementProps {}
const columnNames = [
  "STT",
  "Tiêu đề",
  "Mô tả",
  "Đường dẫn",
  "Hình ảnh",
  "Các dịch vụ",
  "Date & Time",
  "Xác minh",
  "Trạng Thái",
  "Chỉnh sửa",
  "Báo cáo",
];
const fieldMapping = {
  "Tiêu đề": "title",
  "Mô tả": "des",
  "Đường dẫn": "url",
  "Hình ảnh": "thumb",
  "Các dịch vụ": "service_Packet",
  "Date & Time": "date",
  "Xác minh": "verify",
  "Trạng thái": "status",
  "Chỉnh sửa": "edit",
  "Báo cáo": "report",
};
export default function ServiceManagement(props: IServiceManagementProps) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [thumb, setThumb] = React.useState<FileList | null>();
  const [video, setVideo] = React.useState<FileList | null>();
  const [title, setTitle] = React.useState<any>("");
  const [description, setDescription] = React.useState<any>("");
  const [url, setUrl] = React.useState<any>("");
  const dispatch = useAppDispatch();
  const agency: AgencyResponse[] = useAppSelector(
    (state) => state.agency.packResponse
  );
  const postAgency: AgencyResponse = useAppSelector(selectAgency);
  React.useEffect(() => {
    if (postAgency) {
      setTitle(postAgency.title),
        setDescription(postAgency.des),
        setUrl(postAgency.url);
    }
  });
  const handleClearValue = () => {
    setThumb(null);
    setTitle("");
    setUrl("");
    setDescription("");
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  React.useEffect(() => {
    setTimeout(() => {
      dispatch(getPackAgency());
    }, 2000);
  }, [dispatch]);
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleSelectedAgency = (post: AgencyResponse) => {
    dispatch(selectedAgency(post));
  };
  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (thumb && video) {
      try {
        const images = await uploadFile(thumb[0]);
        const videos = await uploadFileVideo(video[0]);
        const newPost: IAgency = {
          title: title,
          url: url,
          des: description,
          thumb: images[0].url,
          service_packet: "Facebook",
          price: "200000",
          video: videos[0].url,
        };
        if (postAgency) {
          dispatch(editPackAgency(newPost));
        } else if (images && images.length > 0) {
          dispatch(createPackAgency(newPost));
        }
        setIsModalOpen(false);
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    } else {
      console.error("No file selected.");
    }
  };
  return (
    <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800">
      <div className="items-center justify-between lg:flex">
        <div className="flex justify-end items-center gap-2">
          <input
            type="text"
            placeholder="Search"
            className="border px-5 py-2 rounded-md"
          />
          <div
            className="font-semibold cursor-pointer flex border hover:bg-gray-300 dark:hover:bg-gray-600 dark:border-gray-600 px-5 py-2 rounded-md dark:text-gray-400"
            onClick={openModal}
          >
            <div>Thêm</div>
            <div>+</div>
          </div>
        </div>

        <div className="items-center sm:flex">
          <div date-rangepicker="" className="flex items-center space-x-4">
            <div className="relative">
              <input
                name="start"
                type="date"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 datepicker-input"
                placeholder="From"
                value="2017-06-01"
              />
            </div>
            <div className="relative">
              <input
                name="end"
                type="date"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 datepicker-input"
                placeholder="To"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-6">
        <div className="overflow-x-auto rounded-lg">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden shadow sm:rounded-lg">
              <Table
                columns={columnNames}
                rows={agency}
                fieldMapping={fieldMapping}
                onClick={handleSelectedAgency}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between pt-3 sm:pt-6">
        <div>
          <button
            className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 rounded-lg hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            type="button"
            data-dropdown-toggle="transactions-dropdown"
          >
            Last 7 days{" "}
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>

          <div
            className="absolute inset-0 inset-x-auto m-0 transform z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
            id="transactions-dropdown"
            data-popper-placement="bottom"
          >
            <div className="px-4 py-3" role="none">
              <p
                className="text-sm font-medium text-gray-900 truncate dark:text-white"
                role="none"
              >
                Sep 16, 2021 - Sep 22, 2021
              </p>
            </div>
            <ul className="py-1" role="none">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                  role="menuitem"
                >
                  Yesterday
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                  role="menuitem"
                >
                  Today
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                  role="menuitem"
                >
                  Last 7 days
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                  role="menuitem"
                >
                  Last 30 days
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                  role="menuitem"
                >
                  Last 90 days
                </a>
              </li>
            </ul>
            <div className="py-1" role="none">
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                role="menuitem"
              >
                Custom...
              </a>
            </div>
          </div>
        </div>
        <div className="flex-shrink-0">
          <a
            href="#"
            className="inline-flex items-center p-2 text-xs font-medium uppercase rounded-lg text-primary-700 sm:text-sm hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
          >
            Transactions Report
            <svg
              className="w-4 h-4 ml-1 sm:w-5 sm:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </a>
        </div>
      </div>
      <Model isOpen={isModalOpen} onClose={closeModal}>
        <div className="w-[400px]  max-h-[900px] bg-white dark:bg-gray-700 flex flex-col items-center justify-center">
          <form className="w-[400px] flex flex-col gap-7 overflow-y-scroll no-scrollbar">
            <div>
              <label htmlFor="" className=" dark:text-white">
                <span className="text-red-500 mr-2">*</span>Tiêu đề
              </label>
              <input
                value={title || ""}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full h-[40px] p-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                type="text"
              />
            </div>
            <div>
              <label htmlFor="" className=" dark:text-white">
                <span className="text-red-500 mr-2">*</span>Mô tả
              </label>
              <textarea
                value={description || ""}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full h-[70px] p-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                rows={5}
              />
            </div>
            <div>
              <label htmlFor="" className=" dark:text-white">
                <span className="text-red-500 mr-2">*</span>URL
              </label>
              <input
                value={url || ""}
                onChange={(e) => setUrl(e.target.value)}
                className="w-full h-[40px] p-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                type="text"
              />
            </div>
            <div>
              <label htmlFor="" className="dark:text-white">
                <span className="text-red-500 mr-2">*</span>Hình ảnh
              </label>
              <div className="w-full h-[150px]">
                <InputFile onChange={(value) => setThumb(value)} />
              </div>
            </div>
            <div>
              <label htmlFor="" className="dark:text-white">
                <span className="text-red-500 mr-2">*</span>Video
              </label>
              <div className="w-full ">
                <InputVideo onChange={(value) => setVideo(value)} />
              </div>
            </div>
            <div className="w-full flex justify-between">
              <select
                className=" h-[40px] border rounded-lg w-[49%]"
                name=""
                id=""
              >
                <option value="">Chọn gói youtube</option>
              </select>
              <select
                className=" h-[40px] border rounded-lg w-[49%]"
                name=""
                id=""
              >
                <option value="">Chọn gói website </option>
              </select>
            </div>
            <div className="flex">
              <div className="w-full flex justify-center">
                <div
                  className="px-[22px] py-[8px] w-[132px] text-center bg-[#F9D916] text-[17px] rounded-[5px] cursor-pointer"
                  onClick={handleClearValue}
                >
                  Hủy
                </div>
              </div>
              <div className="w-full flex justify-center">
                <div
                  className="px-[22px] py-[8px] w-[132px] text-center bg-[#F9D916] text-[17px] rounded-[5px] cursor-pointer"
                  onClick={handleSubmit}
                >
                  Thêm
                </div>
              </div>
            </div>
          </form>
        </div>
      </Model>
    </div>
  );
}
