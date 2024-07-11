import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const ToolTip = () => {
  return (
    <div className="space-y-2 space-x-2 ">
      <TooltipProvider className="">
        <Tooltip>
          <TooltipTrigger>
            <p className="border border-red-600 py-2 px-4 rounded-full hover:bg-[#c50000] hover:text-white">
              CBC
            </p>
          </TooltipTrigger>
          <TooltipContent>
            <p>Add to Cart</p>
          </TooltipContent>
        </Tooltip>
        
        <Tooltip>
          <TooltipTrigger>
            <p className="border border-red-600 py-2 px-4 rounded-full hover:bg-[#c50000] hover:text-white">
              COMPLETE BLOOD COUNT
            </p>
          </TooltipTrigger>
          <TooltipContent>
            <p>Add to Cart</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <p className="border border-red-600 py-2 px-4 rounded-full hover:bg-[#c50000] hover:text-white">
              PCV
            </p>
          </TooltipTrigger>
          <TooltipContent>
            <p>Add to Cart</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <p className="border border-red-600 py-2 px-4 rounded-full hover:bg-[#c50000] hover:text-white">
              HEMATROCIT
            </p>
          </TooltipTrigger>
          <TooltipContent>
            <p>Add to Cart</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <p className="border border-red-600 py-2 px-4 rounded-full hover:bg-[#c50000] hover:text-white">
              RDW
            </p>
          </TooltipTrigger>
          <TooltipContent>
            <p>Add to Cart</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <p className="border border-red-600 py-2 px-4 rounded-full hover:bg-[#c50000] hover:text-white">
              MCH
            </p>
          </TooltipTrigger>
          <TooltipContent>
            <p>Add to Cart</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <p className="border border-red-600 py-2 px-4 rounded-full hover:bg-[#c50000] hover:text-white">
              MCV
            </p>
          </TooltipTrigger>
          <TooltipContent>
            <p>Add to Cart</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <p className="border border-red-600 py-2 px-4 rounded-full hover:bg-[#c50000] hover:text-white">
              RBC
            </p>
          </TooltipTrigger>
          <TooltipContent>
            <p>Add to Cart</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default ToolTip;
