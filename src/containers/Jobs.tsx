"use client";
import { useState } from "react";
import JobPreview from "./JobSection/JobPreview";
import Applicants from "./JobSection/Applicants";
import Match from "./JobSection/Match";
import Messages from "./Messages";

export default function Jobs() {
  const [activeButton, setActiveButton] = useState("jobpreview");
  const handleClick = (button: string) => {
    setActiveButton(button);
  };
  return (
    <>
      <div className="border-b-2 border-gray-300">
        {/* Review ml-20 */}
        {/* <div className="flex gap-14 ml-20 pt-2">
          <button
            onClick={() => handleClick("jobpreview")}
            className={`border-[#DC4A2D] py-3 font-semibold relative
            ${
              activeButton === "jobpreview" ? "text-[#DC4A2D]" : "text-gray-500"
            }`}
          >
            {activeButton === "jobpreview" && (
              <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 h-1 bg-[#DC4A2D] w-3/5"></span>
            )}
            Job Preview
          </button>

          <button
            onClick={() => handleClick("applicants")}
            className={`border-[#DC4A2D] py-3 font-semibold relative ${
              activeButton === "applicants" ? "text-[#DC4A2D]" : "text-gray-500"
            }`}
          >
            {activeButton === "applicants" && (
              <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 h-1 bg-[#DC4A2D] w-3/5"></span>
            )}
            Applicants
          </button>
          <button
            onClick={() => handleClick("match")}
            className={`border-[#DC4A2D] py-3 font-semibold relative ${
              activeButton === "match" ? "text-[#DC4A2D] " : "text-gray-500"
            }`}
          >
            {activeButton === "match" && (
              <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 h-1 bg-[#DC4A2D] w-3/5"></span>
            )}
            Match
          </button>
          <button
            onClick={() => handleClick("messages")}
            className={`border-[#DC4A2D] py-3 font-semibold relative ${
              activeButton === "messages" ? "text-[#DC4A2D] " : "text-gray-500"
            }`}
          >
            {activeButton === "messages" && (
              <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 h-1 bg-[#DC4A2D] w-3/5"></span>
            )}
            Messages
          </button>
        </div> */}

        {/* Or */}

        <div className="flex gap-14 ml-20 pt-2">
          <button
            onClick={() => handleClick("jobpreview")}
            className={`border-[#DC4A2D] py-3 font-semibold  
            ${
              activeButton === "jobpreview"
                ? "text-[#DC4A2D] border-b-4"
                : "text-gray-500"
            }`}
          >
            Job Preview
          </button>

          <button
            onClick={() => handleClick("applicants")}
            className={`border-[#DC4A2D] py-3 font-semibold   ${
              activeButton === "applicants"
                ? "text-[#DC4A2D] border-b-4"
                : "text-gray-500"
            }`}
          >
            Applicants
          </button>
          <button
            onClick={() => handleClick("match")}
            className={`border-[#DC4A2D] py-3 font-semibold   ${
              activeButton === "match"
                ? "text-[#DC4A2D] border-b-4 "
                : "text-gray-500"
            }`}
          >
            Match
          </button>
          <button
            onClick={() => handleClick("messages")}
            className={`border-[#DC4A2D] py-3 font-semibold   ${
              activeButton === "messages"
                ? "text-[#DC4A2D] border-b-4 "
                : "text-gray-500"
            }`}
          >
            Messages
          </button>
        </div>
      </div>

      <div className="justify-center align-middle">
        {activeButton === "jobpreview" && <JobPreview />}
        {activeButton === "applicants" && <Applicants />}
        {activeButton === "match" && <Match />}
        {activeButton === "messages" && <Messages />}
      </div>
    </>
  );
}
