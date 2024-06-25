import { Button } from "@/components/ui/button";
import {
  DotFilledIcon,
  EyeOpenIcon,
  FigmaLogoIcon,
  GearIcon,
  GitHubLogoIcon,
  NotionLogoIcon,
  SewingPinFilledIcon,
} from "@radix-ui/react-icons";
import { EyeIcon, MapPinIcon, MessageSquareIcon, PencilIcon, Trash2Icon, UserRoundCheckIcon, UsersIcon } from "lucide-react";
import Image from "next/image";

export default function JobPreview() {
  return (
    <>
      <main className="grid grid-cols-3/1">
        {/* Column 1 */}
        <div className="border-b-2 border-[#E7E7E7] ">
          {/* Row 1 */}
          <div className="border-b-2 border-[#E7E7E7] pt-8 pb-4">
            <div className="ml-20">
              <div className="flex gap-4">
                <h1 className="font-bold text-4xl">Senior Product Designer</h1>
                <DotFilledIcon
                  color="#D1D1D1"
                  height="15"
                  width="15"
                  className="mt-3"
                />
                <span className="mt-2 text-[#888888]">posted 2 days ago</span>
                <span className="text-xs mt-2 flex items-center bg-[#ECFDF3] border-2 border-[#B2F1CB] pr-2 h-fit rounded-2xl text-[#067647]">
                  <DotFilledIcon color="#17B26A" height="22" width="22" /> Open
                </span>
              </div>

              <div className="flex items-center text-xl py-4 gap-3">
                <span className="flex items-center gap-2">
                  <MapPinIcon /> Delaware, USA
                </span>
                <DotFilledIcon color="#D1D1D1" height="15" width="15" />
                <span className="flex items-center gap-2">
                  <Image src="/coin-stack.png" width={25} height={25} alt=""/> $300k-$400k
                </span>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="border-b-2 border-[#E7E7E7] pt-8 pb-4">
            <div className="ml-20 py-8 text-sm">
              <div className="grid grid-cols-5">
                <div className="">
                  <h1 className="pb-2 text-gray-500">Required Skills</h1>
                  <span className="flex items-center gap-2 border-2  border-[#D0D5DD] rounded-md h-fit w-fit pl-1 pr-2 my-2">
                    <Image src="/figma.svg" alt="" height={15} width={15}/> Figma
                  </span>
                  <span className="flex items-center gap-2 border-2  border-[#D0D5DD] rounded-md h-fit w-fit pl-1 pr-2 my-2">
                    <Image src="/adobe-illustrator.svg" alt="" width={15} height={15}/> Adobe Illustrator
                  </span>
                  <span className="flex items-center gap-2 border-2  border-[#D0D5DD] rounded-md h-fit w-fit pl-1 pr-2 my-2">
                    <Image src="/adobe-xd.svg" alt="" width={15} height={15}/> Adobe XD
                  </span>
                </div>
                <div>
                  <h1 className="pb-2 text-gray-500">Preferred Language</h1>
                  <h1 className="font-bold">English</h1>
                </div>
                <div>
                  <h1 className="pb-2 text-gray-500">Type</h1>
                  <h1 className="font-bold">Full-time</h1>
                </div>
                <div>
                  <h1 className="pb-2 text-gray-500">Years of Experience</h1>
                  <h1 className="font-bold">3+ Years of Experience</h1>
                </div>
              </div>
            </div>
          </div>

          {/* Row 3 */}
          <div className="border-b-2 border-[#E7E7E7] pt-8 pb-4">
            <div className="text-sm ml-20">
              <h1 className="pb-0 pt-2 text-gray-500">About the Role</h1>
              <ol className="list-inside list-decimal">
                <li>Handle the UI/UX research design</li>
                <li>
                  Work on researching on latest web applications designs &
                  trends
                </li>
                <li>Work on conceptualizing and visualizing</li>
                <li>
                  Work on creating graphics content and other graphic related
                  works
                </li>
              </ol>

              <h1 className="pb-0 pt-2">Benefits:</h1>
              <ol className="list-inside list-disc">
                <li>Health insurance</li>
                <li>Provident Fund</li>
              </ol>

              <h1 className="pb-0 pt-2">Schedule:</h1>
              <ol className="list-inside list-disc">
                <li>Day shift</li>
              </ol>

              <h1 className="pb-0 pt-2">Supplemental pay types:</h1>
              <ol className="list-inside list-disc">
                <li>Performance bonus</li>
                <li> Yearly bonus</li>
              </ol>

              <h1 className="pb-0 pt-2">Work Location: In person</h1>
            </div>
          </div>

          {/* Row 4 */}
          <div className="border-b-2 border-[#E7E7E7] pt-8 pb-4">
            <div className="ml-20">
              <div className="flex items-center pb-4">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr42lt0uL4-RkQGD5AoUhQGn4OGr-foggxTQ&s"
                  alt="Logo"
                  width="40px"
                  height="40px"
                />
                <h1 className="text-xl px-4">Atlassian</h1>
              </div>
              <div className="grid grid-cols-3 text-sm">
                <div>
                  <div className="pb-6">
                    <h1 className="text-[#6E6D6D] pb-1">Company Size</h1>
                    <h1 className="font-medium">1k-2k Employees</h1>
                  </div>
                  <div className="pb-6">
                    <h1 className="text-[#6E6D6D] pb-1">Sector</h1>
                    <h1 className="font-medium">
                      Information Technology, Infrastructure
                    </h1>
                  </div>
                  <div className="pb-6">
                    <h1 className="text-[#6E6D6D] pb-1">Founded In</h1>
                    <h1 className="font-medium">2019</h1>
                  </div>
                </div>

                <div>
                  <div className="pb-6">
                    <h1 className="text-[#6E6D6D] pb-1">Type</h1>
                    <h1 className="font-medium">Private</h1>
                  </div>
                  <div className="pb-6">
                    <h1 className="text-[#6E6D6D] pb-1">Funding</h1>
                    <h1 className="font-medium">Bootstrapped</h1>
                  </div>
                  <div className="pb-6">
                    <h1 className="text-[#6E6D6D] pb-1">Founded By</h1>
                    <h1 className="font-medium">
                      Scott Farquhar, Mike Cannon-Brookes
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Column 2 */}
        <div className="border-l-2 border-[#E7E7E7] px-8">
          <div className="grid grid-cols-2 py-8 gap-5 ">
            <Button
              className="text-base bg-[#FEF4F2] text-[#DC4A2D] border-2 border-[#DC4A2D]"
              variant="outline"
            >
              <Trash2Icon className="pr-2" width="25" height="25" />
              Delete Job
            </Button>
            <Button
              className="text-base text-white bg-[#DC4A2D]"
              variant="default"
            >
              <PencilIcon className="pr-2" width="25" height="25" />
              Edit Job
            </Button>
          </div>

          <div className="px-4">
            <div className="grid grid-cols-3/1 py-4">
              <h1 className="flex items-center">
                <UsersIcon width="25" height="25" className="mr-4" />
                Applicants
              </h1>
              <div className="flex justify-end">
                <span className=" font-bold text-xl">400</span>
              </div>
            </div>
            <hr />
            <div className="grid grid-cols-3/1 py-4">
              <h1 className="flex items-center">
                <UserRoundCheckIcon width="25" height="25" className="mr-4" />
                Matches
              </h1>
              <div className="flex justify-end">
                <span className=" font-bold text-xl">100</span>
              </div>
            </div>
            <hr />
            <div className="grid grid-cols-3/1 py-4">
              <h1 className="flex items-center">
                <MessageSquareIcon width="25" height="25" className="mr-4" />
                Messages
              </h1>
              <div className="flex justify-end">
                <span className=" font-bold text-xl">147</span>
              </div>
            </div>
            <hr />
            <div className="grid grid-cols-3/1 py-4">
              <h1 className="flex items-center">
                <EyeIcon width="25" height="25" className="mr-4" />
                Views
              </h1>
              <div className="flex justify-end">
                <span className=" font-bold text-xl">800</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
