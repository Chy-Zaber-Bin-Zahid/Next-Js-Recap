"use client";
import React, { useState } from "react";
import { clsx } from "clsx";
import { X, Warning } from "@phosphor-icons/react";
import ConfigureAxiosInstance from "../utils/axiosConfig/axiosConfig";

type Props = {};

const FileUpload = (props: Props) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string>("No file chosen");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const axiosInstance = ConfigureAxiosInstance();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      if (file.size > 2 * 1024 * 1024) {
        // File size exceeds 2MB, show error message
        setErrorMessage(`Invalid format: File size ≤ 2mb, 200x200 pixels.`);
        setSelectedFile(null);
        setFileName("No file chosen");
      } else {
        setSelectedFile(file);
        setFileName(truncateFileName(file.name));
        setErrorMessage(null); // Reset error message if file size is within limit
      }
    } else {
      setSelectedFile(null);
      setFileName("No file chosen");
    }
  };

  const handleFileUpload = async () => {
    if (!selectedFile) {
      setErrorMessage("logo is required."); // Set error message if no file is selected
      return;
    }
    // Perform upload action here using Axios instance
    const formData = new FormData();
    formData.append("file", selectedFile, selectedFile.name);
    try {
      console.log("formData entries:", [...formData.entries()]);
      const response = await axiosInstance.post("/upload/documents", formData);
      console.log("Upload response:", response.data);
      // Handle success, reset state or show success message
    } catch (error) {
      console.error("Upload error:", error);
      // Handle error, show error message
    }
  };

  const truncateFileName = (name: string): string => {
    const extensionIndex = name.lastIndexOf(".");
    const fileNameWithoutExtension = name.substring(0, extensionIndex);
    const extension = name.substring(extensionIndex + 1);

    if (fileNameWithoutExtension.length > 10) {
      const truncatedName =
        fileNameWithoutExtension.substring(0, 10) +
        "..." +
        fileNameWithoutExtension.slice(-2); // Keep first 10 characters, then "..." and last 2 characters
      return truncatedName + "." + extension;
    }
    return name;
  };

  const handleClearFileName = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setSelectedFile(null);
    setFileName("No file chosen");
  };

  return (
    <div className="flex flex-col gap-2 justify-center items-center h-screen w-[700px] mx-auto">
      <div className="flex gap-4 justify-center items-start w-full">
        <h1 className="font-semibold mt-2">
          Add file <span className="text-red-600">*</span>
        </h1>
        <div className="flex-grow flex flex-col gap-1">
          <label
            htmlFor="fileInput"
            className={clsx(
              "text-blank py-2 px-4 cursor-pointer bg-white rounded shadow-md border w-full block",
              {
                "border-red-600": errorMessage,
              }
            )}
          >
            Choose File
            <span
              className={clsx(
                "ml-5 rounded-md px-2 py-1 items-center justify-center",
                fileName !== "No file chosen" && "bg-gray-100"
              )}
            >
              {fileName}
              {selectedFile && (
                <X
                  className="inline ml-2"
                  size={12}
                  onClick={handleClearFileName}
                />
              )}
            </span>
          </label>
          <input
            id="fileInput"
            type="file"
            onChange={handleFileChange}
            className="hidden"
          />
          {errorMessage && (
            <p className="text-red-600 flex gap-1 justify-start items-center text-sm font-semibold">
              <Warning size={14} />
              {errorMessage}
            </p>
          )}
        </div>
      </div>
      <button
        onClick={handleFileUpload}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
      >
        Upload
      </button>
    </div>
  );
};

export default FileUpload;
