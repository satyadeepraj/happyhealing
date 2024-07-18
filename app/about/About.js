"use client";

import Image from "next/image";
export function Aboutfirst() {
  return (
    <div className="mobile:w-full">
      <div className="flex mobile:flex mobile:flex-col mobile:w-full flex-col justify-center items-center h-[400px] mobile:mt-60 ">
        <div className="mb-4 mobile:hidden">
          <img
            className="w-[30%] mx-auto"
            alt="Cremica Food Industries Limited"
            width={100}
            height={100}
            src="https://res.cloudinary.com/dzkpb9csm/image/upload/v1719767854/HappyHealingDiagnostic/Happy_Healing_Diagnostics_new_logo_-_Copy__1_-removebg-preview_sgwxf8.png"
          />
        </div>
        <h2 className="text-[#444444] font-serif text-2xl mobile:text-xl font-bold">
          Happy_Healing_Diagnostics
        </h2>
        <div className="border border-r-[50px] border-red-600 mt-8"></div>
        <div className="flex mobile:flex mobile:flex-col  flex-row items-center justify-center gap-10 ml-14 mobile:ml-0 mt-5">
          <div className="w-[267px] h-[150px] ">
            <iframe
              width="267"
              height="150"
              src="https://www.youtube.com/embed/XSSRMOvPEAA?start=22"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-4 mobile:p-2 mobile:w-full  w-[1000px] font-sans flex-wrap">
            <p className="text-[#444444] text-justify px-4 leading-relaxed ">
              Happy Healing Diagnostic, a name synonymous with excellence,
              precision, and patient care, is fast becoming a trusted name in
              the healthcare sector. Our comprehensive range of diagnostic
              services has been meticulously developed to provide the highest
              standards in medical testing. Today, Happy Healing Diagnostic is
              renowned for its advanced technology, accurate results, and
              commitment to health-oriented practices. We offer a wide variety
              of tests including blood work, genetic testing, pathology, and
              other specialized diagnostic services. Our state-of-the-art
              laboratory is equipped with the latest diagnostic equipment,
              ensuring accurate and timely results.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-start w-[88%] mx-auto text-[#444444] font-sans mb-16 mobile:mt-[200px]">
        <h1 className="py-8 mobile:py-4 font-bold text-5xl mobile:text-4xl text-black">
          History
        </h1>
        <div className="flex mobile:flex mobile:flex-col gap-6 mb-4">
          <div className="w-[88%] mobile:w-full text-justify leading-relaxed">
            <p className="mb-4">
              Happy Healing Diagnostic has a rich history of excellence in the
              field of lab pathology. Established in 2010, our diagnostic center
              was founded with the mission of providing accurate and reliable
              medical testing to support optimal patient care. Over the years,
              we have continuously upgraded our technology and expanded our
              services to include a wide range of pathological tests, from
              routine blood work to advanced genetic testing. Our
              state-of-the-art laboratory is equipped with the latest diagnostic
              equipment, ensuring precise and timely results.
            </p>
            <p className="mobile:hidden mb-4">
              Our team of experienced pathologists and technicians are dedicated
              to maintaining the highest standards of quality and accuracy. We
              take pride in our commitment to patient-centric care, providing
              personalized attention and comprehensive diagnostic solutions. At
              Happy Healing Diagnostic, we strive to be at the forefront of
              medical diagnostics, helping physicians and patients make informed
              healthcare decisions.Our commitment to continuous education and
              training ensures that our staff remains knowledgeable about the
              latest advancements in pathology. We believe in the power of
              diagnostics to improve health outcomes and are dedicated to
              serving our community with compassion and excellence.
            </p>
          </div>
          <div>
            <img
              className="w-[400px] h-[327px]"
              src="https://res.cloudinary.com/dzkpb9csm/image/upload/v1720709669/HappyHealingDiagnostic/41586_2015_BF521422a_Figa_HTML_pdmbwx.webp"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
