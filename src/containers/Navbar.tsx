"use client";
import { ModeToggle } from "@/components/DarkMode";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  BellIcon,
  ChatBubbleIcon,
  ChevronDownIcon,
} from "@radix-ui/react-icons";
import Jobs from "./Jobs";
import Messages from "./Messages";
import Payments from "./Payments";
import { BackpackIcon, BriefcaseIcon, HandCoinsIcon, MessageSquareDotIcon } from "lucide-react";

export default function Navbar() {
  const [activeButton, setActiveButton] = useState("jobs");
  const handleClick = (button: string) => {
    setActiveButton(button);
  };

  return (
    <>
      <main className="py-3 sticky top-0 bg-white border-b-2 border-solid border-gray-300 flex justify-between items-center">
        {/* Logo */}
        <div className="ml-8">
          <button className="bg-gray-200 p-4 text-[#DC4A2D] font-semibold">
            Logo
          </button>
        </div>

        {/* Navigation */}
        <div className="justify-center gap-8 flex border-solid border-gray-200 border-2 p-1 rounded-3xl">
          <button
            onClick={() => handleClick("jobs")}
            className={`p-3 font-medium rounded-3xl flex items-center ${
              activeButton === "jobs" ? "bg-[#DC4A2D]  text-yellow-50  " : ""
            } border-black`}
          >
            <BriefcaseIcon height="18" width="18" />
            <h1 className="pl-2">Jobs</h1>
          </button>
          <button
            onClick={() => handleClick("messages")}
            className={`p-3 font-medium rounded-3xl flex items-center ${
              activeButton === "messages" ? "bg-[#DC4A2D] text-white" : ""
            } border-black`}
          >
            <MessageSquareDotIcon height="18" width="18" />
            <h1 className="pl-2">Messages</h1>
          </button>
          <button
            onClick={() => handleClick("payments")}
            className={`p-3 font-medium rounded-3xl flex items-center ${
              activeButton === "payments" ? "bg-[#DC4A2D] text-white" : ""
            } border-black`}
          >
            <HandCoinsIcon height="18" width="18" />
            <h1 className="pl-2">Payments</h1>
          </button>
        </div>

        {/* Div 3 */}
        <div className="flex mr-8 py-3">
          <div className="px-3">
            {/* <ModeToggle /> */}
          </div>
          <div className="px-3 flex">
            <button className="items-center">
              <BellIcon height="26" width="26" />
            </button>
          </div>
          <div className="px-3">
            <button className="flex items-center">
              <Avatar>
                <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr42lt0uL4-RkQGD5AoUhQGn4OGr-foggxTQ&s" />
                <AvatarFallback>A</AvatarFallback>
              </Avatar>
              <ChevronDownIcon height="20" width="20" />
            </button>
          </div>
        </div>
      </main>

      {/* Main Containers */}
      <div className="justify-center align-middle">
        {activeButton === "jobs" && <Jobs />}
        {activeButton === "messages" && <Messages />}
        {activeButton === "payments" && <Payments />}
      </div>
    </>
  );
}
