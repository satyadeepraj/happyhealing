import Specialisation from "@/components/Test/Specialisation";
import ToolTip from "@/components/Test/ToolTip";
import React from "react";
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { CardCart } from "@/components/component/CardCart";

const Cbc = () => {
  return (
    <div>
      <div className="container mx-auto py-8 grid grid-cols-1 md:grid-cols-2 ">
        <div className="w-[120%] mx-auto">
          <div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="bg-gradient-to-r from-red-600 to-pink-300 h-24 text-4xl text-white font-semibold flex items-center px-4">
                CBC Test
              </div>
              <div className="p-4">
                <h2 className="text-2xl font-bold mb-2"></h2>
                <p className="text-gray-600">Lab | Pathology Lab</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="line-through text-gray-500">₹398</span>
                  <span className="text-xl font-bold text-black">₹199</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-14 pt-4">
            <p className="text-xl font-bold">Also Known As</p>
            <span className="">
              <ToolTip />
            </span>
          </div>
          <p className="py-8 text-justify leading-relaxed">
            CBC Test - Complete Blood Count Test is a haematology blood test
            profile which is generally used to indicate your overall health,
            including anemia, infection, and leukemia or we can say CBC test -
            complete blood count test is a blood panel requested by a medical
            professional or doctor. CBC test gives complete information about
            the cells in a patient's blood, such as the cell count for each
            blood cell types and the concentrations of hemoglobin. CBC Test
            includes the measurement of several components in the blood such as:
            Total Leukocyte Counts (TLC) also Known as White Blood Cells (WBC)
            and their differential counting - White Blood cells and their
            differential counting: DLC – Differential Leucocyte Counts such as
            Neutrophils, Monocytes, Lymphocytes, Eosinophils, and Basophils;
            Total RBC - Red Blood Cells, Platelet Count, Haemoglobin, Red Cell
            Distribution Width (RDW-CV, RDW-SD). The CBC test is performed by a
            by a fully automated hematology analyzer at HOD.
          </p>
          <div className="mb-4">
            <h3 className="text-lg font-semibold bg-slate-200 py-2 px-4">
              Includes <span className="text-[#c50000]"> 22 </span>Test
              Parameters
            </h3>

            <ul class="p-4 bg-slate-100">
              <li class="py-1 flex items-center">
                <span class="w-1.5 h-1.5 rounded-full block bg-black"></span>
                <span class="ml-2">Hemoglobin</span>
              </li>
              <li class="py-1 flex items-center">
                <span class="w-1.5 h-1.5 rounded-full block bg-black"></span>
                <span class="ml-2">Total RBC</span>
              </li>
              <li class="py-1 flex items-center">
                <span class="w-1.5 h-1.5 rounded-full block bg-black"></span>
                <span class="ml-2">Platelet Count</span>
              </li>
              <li class="py-1 flex items-center">
                <span class="w-1.5 h-1.5 rounded-full block bg-black"></span>
                <span class="ml-2">Total Leucocyte Count (WBC)</span>
              </li>
              <li class="py-1 flex items-center">
                <span class="w-1.5 h-1.5 rounded-full block bg-black"></span>
                <span class="ml-2">Neutrophils</span>
              </li>
              <li class="py-1 flex items-center">
                <span class="w-1.5 h-1.5 rounded-full block bg-black"></span>
                <span class="ml-2">Lymphocytes</span>
              </li>
              <li class="py-1 flex items-center">
                <span class="w-1.5 h-1.5 rounded-full block bg-black"></span>
                <span class="ml-2">Monocytes</span>
              </li>
              <li class="py-1 flex items-center">
                <span class="w-1.5 h-1.5 rounded-full block bg-black"></span>
                <span class="ml-2">Eosinophils</span>
              </li>
              <li class="py-1 flex items-center">
                <span class="w-1.5 h-1.5 rounded-full block bg-black"></span>
                <span class="ml-2">Basophils</span>
              </li>
              <li class="py-1 flex items-center">
                <span class="w-1.5 h-1.5 rounded-full block bg-black"></span>
                <span class="ml-2">Absolute Neutrophil Count</span>
              </li>
              <li class="py-1 flex items-center">
                <span class="w-1.5 h-1.5 rounded-full block bg-black"></span>
                <span class="ml-2">Absolute Lymphocyte Count</span>
              </li>
              <li class="py-1 flex items-center">
                <span class="w-1.5 h-1.5 rounded-full block bg-black"></span>
                <span class="ml-2">Absolute Monocyte Count</span>
              </li>
              <li class="py-1 flex items-center">
                <span class="w-1.5 h-1.5 rounded-full block bg-black"></span>
                <span class="ml-2">Absolute Eosinophil Count</span>
              </li>
              <li class="py-1 flex items-center">
                <span class="w-1.5 h-1.5 rounded-full block bg-black"></span>
                <span class="ml-2">Absolute Basophil Count</span>
              </li>
              <li class="py-1 flex items-center">
                <span class="w-1.5 h-1.5 rounded-full block bg-black"></span>
                <span class="ml-2">Hematocrit</span>
              </li>
              <li class="py-1 flex items-center">
                <span class="w-1.5 h-1.5 rounded-full block bg-black"></span>
                <span class="ml-2">Mean Corpuscular Volume (MCV)</span>
              </li>
              <li class="py-1 flex items-center">
                <span class="w-1.5 h-1.5 rounded-full block bg-black"></span>
                <span class="ml-2">Mean Corp. Hemoglobin (MCH)</span>
              </li>
              <li class="py-1 flex items-center">
                <span class="w-1.5 h-1.5 rounded-full block bg-black"></span>
                <span class="ml-2">MCH Concentration (MCHC)</span>
              </li>
              <li class="py-1 flex items-center">
                <span class="w-1.5 h-1.5 rounded-full block bg-black"></span>
                <span class="ml-2">Red Cell Dist. Width (RDW-CV)</span>
              </li>
              <li class="py-1 flex items-center">
                <span class="w-1.5 h-1.5 rounded-full block bg-black"></span>
                <span class="ml-2">Red Cell Dist. Width (RDW-SD)</span>
              </li>
              <li class="py-1 flex items-center">
                <span class="w-1.5 h-1.5 rounded-full block bg-black"></span>
                <span class="ml-2">Mean Platelet Volume (MPV)</span>
              </li>
              <li class="py-1 flex items-center">
                <span class="w-1.5 h-1.5 rounded-full block bg-black"></span>
                <span class="ml-2">Neutrophil-Lymphocyte Ratio (NLR)</span>
              </li>
              <li class="py-1 flex items-center">
                <span class="w-1.5 h-1.5 rounded-full block bg-black"></span>
                <span class="ml-2">Mentzer Index</span>
              </li>
            </ul>
          </div>
          <div className="bg-slate-100 py-4 flex items-center px-4 gap-6 mb-4">
            <p className="text-lg font-semibold">Test Preparation</p>
            <span>:</span>
            <p>No Special Preparation. Informed Consent Required.</p>
          </div>
          <div className="bg-slate-100 py-4 flex items-center px-4 gap-10 mb-4">
            <h3 className="text-lg font-semibold">Reporting TAT</h3>
            <span>:</span>
            <p>Same Day*</p>
          </div>
          <div className="bg-slate-100 py-4 flex items-center px-4 gap-4">
            <h3 className="text-lg font-semibold">Specialisation(s)</h3>
            <span>:</span>
            <Specialisation />
          </div>
        </div>
        <div className="flex ml-[200px] py-4">
        <CardCart/>
         
        </div>
      </div>
    </div>
  );
};

export default Cbc;
