"use client";
import React, { useRef } from "react";
import { IconContext } from "react-icons";
import { AiOutlineClose } from "react-icons/ai";
import { uploadFile } from "../../../utils/upload.api";
import Image from "next/image";

interface IInputFile {
  onChange?: (value: FileList | null) => void;
}

const InputFile = ({ onChange }: IInputFile) => {
  const [imagePreview, setImagePreview] = React.useState<string>("");

  const inputFileRef = useRef<HTMLInputElement>();
  const wrapperImageRef = useRef<HTMLDivElement>();

  const onDragEnter = () => wrapperImageRef.current?.classList.add("dragover");

  const onDragLeave = () =>
    wrapperImageRef.current?.classList.remove("dragover");

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    wrapperImageRef.current?.classList.remove("dragover");
    handleImageData(e.dataTransfer.files);
  };

  const handleInputFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleImageData(e.target.files);
    onChange && onChange(e.target.files);
  };

  const handleImageData = (files: FileList | null) => {
    if (files && files.length > 0) {
      setImagePreview(URL.createObjectURL(files[0]));
    } else {
      setImagePreview("");
    }
  };

  const handleCloseImagePreview = () => {
    setImagePreview("");
  };

  return (
    <>
      <div
        className={`border-dashed flex justify-center items-center border-2 rounded transition relative w-full h-full  ${
          !imagePreview && "cursor-pointer hover:bg-orange-50"
        }`}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onClick={() => !imagePreview && inputFileRef.current?.click()}
      >
        {imagePreview ? (
          <div className="absolute h-full">
            <Image
              width={800}
              height={400}
              src={imagePreview}
              alt=""
              className="h-full rounded-md"
            />
            <div
              className="absolute top-0 right-0 cursor-pointer"
              onClick={handleCloseImagePreview}
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
            Click to upload or drag and drop SVG, PNG, JPG or GIF{" "}
          </span>
        )}
      </div>
      <input
        ref={inputFileRef as React.LegacyRef<HTMLInputElement>}
        type={"file"}
        onChange={handleInputFileChange}
        className="invisible"
        accept="image/*"
        key={imagePreview || ""}
      />
    </>
  );
};

export default InputFile;
