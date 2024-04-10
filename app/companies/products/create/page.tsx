"use client";

import CvaClsxButton from "@/app/components/CvaClsxButton";
import React from "react";
import { useState } from "react";
import { PlusCircle } from "@phosphor-icons/react";
import { clsx } from "clsx";

export default function Create() {
  const [selectedFile, setSelectedFile] = useState<any>({});
  const [checkbox, setCheckbox] = useState<boolean>(false);
  const defaultLink = { id: 1, Link: "" };
  const [links, setLinks] = useState<any[]>([defaultLink]);

  const handleAddLink = () => {
    const newId = links.length + 1;
    setLinks([...links, { id: newId, Link: "" }]);
  };

  const handleLinkChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    const updatedLinks = links.map((link) => {
      if (link.id === id) {
        return { ...link, Link: e.target.value };
      }
      return link;
    });
    setLinks(updatedLinks);
  };

  const handleCheckBox = () => {
    setCheckbox(!checkbox);
    if (!checkbox) {
      setLinks([defaultLink]);
    }
  };

  const uploadHandler = (e: any) => {
    if (e.target.files.length < 2) {
      setSelectedFile(e.target.files[0]);
    } else {
      alert("select only one file please");
    }
  };

  const handleSubmit = () => {
    const linksWithContent = links.filter((link) => link.Link.trim() !== "");
    console.log(linksWithContent);
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-full max-w-[500px] flex flex-col gap-2 justify-center items-start">
        <h1 className="font-semibold text-xl">Legal Documents</h1>
        <div className="grid grid-cols-3 gap-2">
          <h1 className="text-gray-500">Upload Doc</h1>
          <div className="col-span-2 ">
            <label
              htmlFor="fileUpload"
              className={clsx(
                "text-gray-500  w-full inline-block border rounded-md bg-[#F4F4F5] px-2 py-1",
                {
                  "cursor-not-allowed bg-gray-300": checkbox,
                  "cursor-pointer": !checkbox,
                }
              )}
            >
              Choose File
              <span className="text-gray-500 ml-3">
                {selectedFile?.name ? (
                  <>
                    {selectedFile?.name.length > 15 ? (
                      <>
                        {selectedFile.name.slice(0, 7)}...
                        {selectedFile.name.slice(
                          selectedFile.name.length - 6,
                          selectedFile.name.length
                        )}
                      </>
                    ) : (
                      <>{selectedFile?.name} </>
                    )}
                  </>
                ) : (
                  <> No file chosen</>
                )}
              </span>
              <input
                className="hidden"
                disabled={checkbox}
                type="file"
                onChange={uploadHandler}
                name="fileUpload"
                id="fileUpload"
              />
            </label>
            <p className="text-sm text-gray-500">
              Any documents file can be uploaded within 10Mb.
            </p>
          </div>
          <div className="flex gap-2 justify-start items-center font-semibold col-span-3">
            <input type="checkbox" onChange={handleCheckBox} />
            <span>Use link to share document</span>
          </div>
          {checkbox && (
            <>
              {links.map((link) => (
                <React.Fragment key={link.id}>
                  <h1 className="text-gray-500">Share Doc Link</h1>
                  <div className="col-span-2 flex">
                    <div className="rounded-s-md border border-r-0 px-2 py-1 text-gray-500">
                      http://
                    </div>
                    <input
                      className="border rounded-e-md px-2 py-1 w-full"
                      placeholder="www.figma.com"
                      type="text"
                      value={link.Link}
                      onChange={(e) => handleLinkChange(e, link.id)}
                    />
                  </div>
                </React.Fragment>
              ))}
              <CvaClsxButton
                className="flex gap-2 justify-center items-center col-span-3 w-fit"
                intent="secondary"
                size="small"
                onClick={handleSubmit}
              >
                Submit
              </CvaClsxButton>
              <CvaClsxButton
                className="flex gap-2 justify-center items-center"
                intent="white"
                size="small"
                onClick={handleAddLink}
              >
                <PlusCircle size={16} />
                Add more link
              </CvaClsxButton>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
