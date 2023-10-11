"use client";
import React, { useRef } from "react";
import { IconContext } from "react-icons";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";

interface IInputVideo {
  onChange?: (value: FileList | null) => void;
}

const InputVideo = ({ onChange }: IInputVideo) => {
  const [videoPreview, setVideoPreview] = React.useState<string | null>();

  const inputFileRef = useRef<HTMLInputElement>();
  const wrapperVideoRef = useRef<HTMLDivElement>();

  const onDragEnter = () => wrapperVideoRef.current?.classList.add("dragover");

  const onDragLeave = () =>
    wrapperVideoRef.current?.classList.remove("dragover");

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    wrapperVideoRef.current?.classList.remove("dragover");
    handleVideoData(e.dataTransfer.files);
  };

  const handleInputFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleVideoData(e.target.files);
    onChange && onChange(e.target.files);
  };

  const handleVideoData = (files: FileList | null) => {
    if (files && files.length > 0) {
      setVideoPreview(URL.createObjectURL(files[0]));
    } else {
      setVideoPreview(null);
    }
  };

  const handleCloseVideoPreview = () => {
    setVideoPreview(null);
  };

  return (
    <>
      <div
        className={` flex justify-center items-center border-2 rounded transition relative w-full h-full  ${
          !videoPreview && "cursor-pointer hover:bg-orange-50"
        }`}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onClick={() => !videoPreview && inputFileRef.current?.click()}
      >
        {videoPreview ? (
          <div className=" h-full">
            <video
              src={videoPreview}
              className="w-[800px] h-[400px]"
              controls
            ></video>
            <div
              className="absolute top-0 right-0 cursor-pointer"
              onClick={handleCloseVideoPreview}
            >
              <IconContext.Provider
                value={{
                  color: "#fff",
                }}
              >
                <div>
                  <AiOutlineClose size={15} />
                </div>
              </IconContext.Provider>
            </div>
          </div>
        ) : (
          <span className="text-gray-400 text-sm">
            Click to upload or drag and drop Video{" "}
          </span>
        )}
      </div>
      <input
        ref={inputFileRef as React.LegacyRef<HTMLInputElement>}
        type={"file"}
        onChange={handleInputFileChange}
        className="invisible"
        accept="video/*"
        key={videoPreview || ""}
      />
    </>
  );
};

export default InputVideo;
