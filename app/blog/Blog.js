"use client";
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { AllBlogsCard } from "@/components/component/AllBlogsCard";

export function Blog() {
  const facilities = [
    {
      title: "PET-CT Scan",
      description:
        "PET CT is a diagnostic imaging test primarily used for detection of cancer and several other ailments…",
      imgSrc:
        "https://res.cloudinary.com/dzkpb9csm/image/upload/v1719747648/HappyHealingDiagnostic/istockphoto-1152190872-612x612_p0jcb3.jpg",
    },
    {
      title: "PET-MRI Scan",
      description:
        "House Of Diagnostics in Association with Indraprastha Apollo Hospital Sarita Vihar, launched India’s Fi…",
      imgSrc:
        "https://res.cloudinary.com/dzkpb9csm/image/upload/v1719747648/HappyHealingDiagnostic/istockphoto-503663386-612x612_snrz0k.jpg",
    },
    {
      title: "X-Ray",
      description:
        "HOD operates multiple Digital X-Ray centres which offer low-cost X-Ray Facilities in Delhi NCR. An …",
      imgSrc:
        "https://res.cloudinary.com/dzkpb9csm/image/upload/v1719746611/HappyHealingDiagnostic/skeleton-2561573_640_v1zsbw.jpg",
    },
    {
      title: "Ultrasound",
      description:
        "Ultrasound is a high-frequency sound that you cannot hear but it can be emitted and detected by…",
      imgSrc:
        "https://res.cloudinary.com/dzkpb9csm/image/upload/v1719747339/HappyHealingDiagnostic/istockphoto-499339482-612x612_xjq7fn.jpg",
    },
    {
      title: "PET-CT Scan",
      description:
        "PET CT is a diagnostic imaging test primarily used for detection of cancer and several other ailments…",
      imgSrc:
        "https://res.cloudinary.com/dzkpb9csm/image/upload/v1719747648/HappyHealingDiagnostic/istockphoto-1152190872-612x612_p0jcb3.jpg",
    },
    {
      title: "PET-MRI Scan",
      description:
        "House Of Diagnostics in Association with Indraprastha Apollo Hospital Sarita Vihar, launched India’s Fi…",
      imgSrc:
        "https://res.cloudinary.com/dzkpb9csm/image/upload/v1719747648/HappyHealingDiagnostic/istockphoto-503663386-612x612_snrz0k.jpg",
    },
    {
      title: "X-Ray",
      description:
        "HOD operates multiple Digital X-Ray centres which offer low-cost X-Ray Facilities in Delhi NCR. An …",
      imgSrc:
        "https://res.cloudinary.com/dzkpb9csm/image/upload/v1719746611/HappyHealingDiagnostic/skeleton-2561573_640_v1zsbw.jpg",
    },
    {
      title: "Ultrasound",
      description:
        "Ultrasound is a high-frequency sound that you cannot hear but it can be emitted and detected by…",
      imgSrc:
        "https://res.cloudinary.com/dzkpb9csm/image/upload/v1719747339/HappyHealingDiagnostic/istockphoto-499339482-612x612_xjq7fn.jpg",
    },
  ];

  return (
    <div className="
    grid grid-cols-4 mobile:grid mobile:grid-cols-1 gap-6 py-12" >
      {facilities.map((facility, index) => (
        <AllBlogsCard
          key={index}
          title={facility.title}
          description={facility.description}
          imgSrc={facility.imgSrc}
        />
      ))}
    </div>
  );
}
