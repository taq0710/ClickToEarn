"use client";
import Model from "@/components/common/Model";
import Image from "next/image";
import * as React from "react";
import Youtube from "/public/Images/yt_1200.png";
import ServiceYoutubePack from "@/components/common/ServiceYoutubePack";
import ServiceWebsitePack from "@/components/common/ServiceWebsitePack";
import {
  createPackServices,
  getPackServices,
  selectgetServices,
} from "@/redux/features/agency/agencySlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { IServicesResponse } from "@/redux/features/agency/interfaces";
export interface IServicesProps {}

const data = [
  {
    name: "youtube",
    sub: "1k",
    time: "2k",
    price: 3000000,
  },
  {
    name: "youtube",
    sub: "1k",
    time: "2k",
    price: 3000000,
  },
];
const dataWeb = [
  {
    name: "vinamilk",
    visit: "10k",
    time: "1k",
    use: "100",
    price: 3000000,
  },
  {
    name: "coca",
    visit: "10k",
    time: "1k",
    use: "100",
    price: 3000000,
  },
];
export default function Services(props: IServicesProps) {
  const [isModalYoutubeOpen, setIsModalYoutubeOpen] = React.useState(false);
  const [isModalWebsiteOpen, setIsModalWebsiteOpen] = React.useState(false);
  const [nameYt, setNameYt] = React.useState("");
  const [nameWeb, setNameWeb] = React.useState("");
  const [visit, setVisit] = React.useState(0);
  const [timeView, setTimeView] = React.useState(0);
  const [view, setView] = React.useState(0);
  const [sub, setSub] = React.useState(0);
  const price = 2000 * view + 2000 * sub + 2000 * visit + 2000 * timeView;
  const dispatch = useAppDispatch();
  const servicePacks: IServicesResponse[] = useAppSelector(selectgetServices);
  const dataYt = servicePacks.filter((servicePack) => {
    return servicePack.service === "Youtube";
  });

  const openModalYoutube = () => {
    setIsModalYoutubeOpen(true);
  };

  const closeModalYoutube = () => {
    setIsModalYoutubeOpen(false);
  };
  const openModalWebsite = () => {
    setIsModalWebsiteOpen(true);
  };

  const closeModalWebsite = () => {
    setIsModalWebsiteOpen(false);
  };
  const handleSubmitYt = () => {
    dispatch(
      createPackServices({
        name: nameYt,
        service: "Youtube",
        price: price,
        subcribe: sub,
        timeview: 0,
        view: view,
        visit: 0,
      })
    );
    setNameYt("");
    setView(0);
    setSub(0);
    setIsModalYoutubeOpen(false);
  };
  const handleSubmitWeb = () => {
    dispatch(
      createPackServices({
        name: nameWeb,
        service: "Website",
        price: price,
        subcribe: 0,
        timeview: timeView,
        view: 0,
        visit: visit,
      })
    );
    setNameWeb("");
    setVisit(0);
    setTimeView(0);
    setIsModalWebsiteOpen(false);
  };

  React.useEffect(() => {
    dispatch(getPackServices());
  }, []);
  return (
    <div>
      <div className="text-center mt-[30px] text-xl font-semibold dark:text-white">
        CÁC GÓI DỊCH VỤ
      </div>
      <div className="mt-[50px]">
        <div className="flex justify-between items-center ">
          <div className="mx-[30px] text-xl font-semibold my-5 dark:text-white">
            Youtube!
          </div>
          <div
            className="dark:text-white hover:scale-110 cursor-pointer hover:underline"
            onClick={openModalYoutube}
          >
            Tạo gói youtube của riêng bạn!
          </div>
        </div>
        <div className="flex mx-[30px]">
          <div className="overflow-x-auto ">
            <div className="flex gap-4 ">
              {data.map((item, index) => (
                <div key={index}>
                  <ServiceYoutubePack
                    namePack={item.name}
                    price={item.price}
                    subscribe={item.sub}
                    time={item.time}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <Model isOpen={isModalYoutubeOpen} onClose={closeModalYoutube}>
          <div className="w-[400px] h-[400px] dark:bg-gray-700 bg-white flex flex-col items-center justify-evenly">
            <form className="w-[400px] flex flex-col gap-7">
              <div>
                <label htmlFor="" className=" dark:text-white">
                  <span className="text-red-500 mr-2">*</span>Tên gói
                </label>
                <input
                  value={nameYt}
                  onChange={(e) => setNameYt(e.target.value)}
                  className="w-full h-[40px] p-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  type="text"
                />
              </div>
              <div>
                <label htmlFor="" className=" dark:text-white">
                  <span className="text-red-500 mr-2">*</span>Lượt xem
                </label>
                <input
                  value={view}
                  onChange={(e: any) => setView(e.target.value)}
                  className="w-full h-[40px] p-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  type="text"
                />
              </div>
              <div>
                <label htmlFor="" className=" dark:text-white">
                  <span className="text-red-500 mr-2">*</span>Lượt đăng ký
                </label>
                <input
                  value={sub}
                  onChange={(e: any) => setSub(e.target.value)}
                  className="w-full h-[40px] p-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  type="text"
                />
              </div>
              <div className="dark:text-white">
                Tổng tiền:{" "}
                <span className="text-red-500 text-xl font-semibold">
                  {price}
                </span>
                đ
              </div>
              <div
                className="w-full flex justify-center"
                onClick={handleSubmitYt}
              >
                <div className="px-[22px] py-[8px] w-[132px] text-center bg-[#F9D916] text-[17px] rounded-[5px] cursor-pointer">
                  Thêm
                </div>
              </div>
            </form>
          </div>
        </Model>
      </div>
      <div className="mt-[50px]">
        <div className="flex justify-between items-center">
          <div className="mx-[30px] text-xl font-semibold my-5 dark:text-white">
            Website!
          </div>
          <div
            className="dark:text-white hover:scale-110 cursor-pointer hover:underline"
            onClick={openModalWebsite}
          >
            Tạo gói Website của riêng bạn!
          </div>
        </div>
        <div className="flex mx-[30px]">
          <div className="overflow-x-auto">
            <div className="flex gap-4 ">
              {dataWeb.map((item, index) => (
                <div key={index}>
                  <ServiceWebsitePack
                    namePack={item.name}
                    time={item.time}
                    user={item.use}
                    visit={item.visit}
                    price={item.price}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <Model isOpen={isModalWebsiteOpen} onClose={closeModalWebsite}>
          <div className="w-[400px] h-[400px] dark:bg-gray-700 bg-white flex flex-col items-center justify-evenly">
            <form className="w-[400px] flex flex-col gap-7">
              <div>
                <label htmlFor="" className=" dark:text-white">
                  <span className="text-red-500 mr-2">*</span>Tên gói
                </label>
                <input
                  value={nameWeb}
                  onChange={(e) => setNameWeb(e.target.value)}
                  className="w-full h-[40px] p-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  type="text"
                />
              </div>
              <div>
                <label htmlFor="" className=" dark:text-white">
                  <span className="text-red-500 mr-2">*</span>Visit
                </label>
                <input
                  value={visit}
                  onChange={(e: any) => setVisit(e.target.value)}
                  className="w-full h-[40px] p-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  type="text"
                />
              </div>
              <div>
                <label htmlFor="" className=" dark:text-white">
                  <span className="text-red-500 mr-2">*</span>Giờ xem
                </label>
                <input
                  value={timeView}
                  onChange={(e: any) => setTimeView(e.target.value)}
                  className="w-full h-[40px] p-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  type="text"
                />
              </div>
              <div
                className="w-full flex justify-center"
                onClick={handleSubmitWeb}
              >
                <div className="px-[22px] py-[8px] w-[132px] text-center bg-[#F9D916] text-[17px] rounded-[5px] cursor-pointer">
                  Thêm
                </div>
              </div>
            </form>
          </div>
        </Model>
      </div>
    </div>
  );
}
