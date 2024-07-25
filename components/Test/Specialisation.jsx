import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Specialisation = () => {
  return (
    <div className="space-y-2 mobile:space-y-6 space-x-2 ">
      <TooltipProvider className="">
        <Tooltip>
          <TooltipTrigger>
            <span className="border border-red-600 py-2 px-4 rounded-full hover:bg-[#c50000] hover:text-white">
             Fever
            </span>
          </TooltipTrigger>
          <TooltipContent>
            <p>Fever</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger>
            <span className="border border-red-600 py-2 px-4 rounded-full hover:bg-[#c50000] hover:text-white">
              Infection
            </span>
          </TooltipTrigger>
          <TooltipContent>
            <p>Infection</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <span className="border border-red-600 py-2 px-4 rounded-full hover:bg-[#c50000] hover:text-white">
            Blood Infections
            </span>
          </TooltipTrigger>
          <TooltipContent>
            <p> Blood Infections</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <span className="border border-red-600 py-2 px-4 rounded-full hover:bg-[#c50000] hover:text-white">
             Haematology
            </span>
          </TooltipTrigger>
          <TooltipContent>
            <p>Haematology</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default Specialisation;
