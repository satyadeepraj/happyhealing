"use client";
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function HealthPackages() {
  const tests = [
    {
      title: "Allergy Respiratory Scree",
      price: "₹ 3999",
      description:
        "It is a specialised screening test that helps assess respiratory......",
      link: "#",
      imgSrc:
        "https://res.cloudinary.com/dzkpb9csm/image/upload/v1719687474/HappyHealingDiagnostic/woman-8663875_640_osvzaw.webp",
    },
    {
      title: "Food Allergy Screening",
      price: "₹ 3999",
      description:
        "A simple blood test for food allergy can show sensitisation to cert...",
      link: "#",
      imgSrc:
        "https://res.cloudinary.com/dzkpb9csm/image/upload/v1719687674/HappyHealingDiagnostic/ai-generated-8757192_640_i8tplu.webp",
    },
    {
      title: "Complete Haemogram.....",
      price: "₹ 279",
      description:
        "A CBC is a blood test that checks the overall health and dete...",
      link: "#",
      imgSrc:
        "https://res.cloudinary.com/dzkpb9csm/image/upload/v1719574942/HappyHealingDiagnostic/lab-worker-looking-at-vial-of-blood-scaled-1_sbggnk.jpg",
    },
    {
      title: "Aldosterone-Renin Ratio",
      price: "₹ 3999",
      description:
        "This test calculates the Aldosterone and Renin levels in the blood, helping ....",
      link: "#",
      imgSrc:
        "https://res.cloudinary.com/dzkpb9csm/image/upload/v1719575761/HappyHealingDiagnostic/pexels-photo-3902732_u1qdaa.webp",
    },
    {
      title: "Allergy Respiratory Scree",
      price: "₹ 3999",
      description:
        "It is a specialised screening test that helps assess respiratory.......",
      link: "#",
      imgSrc:
        "https://res.cloudinary.com/dzkpb9csm/image/upload/v1719687474/HappyHealingDiagnostic/woman-8663875_640_osvzaw.webp",
    },
    {
      title: "Food Allergy Screening",
      price: "₹ 3999",
      description:
        "A simple blood test for food allergy can show sensitisation to cert...",
      link: "#",
      imgSrc:
        "https://res.cloudinary.com/dzkpb9csm/image/upload/v1719687674/HappyHealingDiagnostic/ai-generated-8757192_640_i8tplu.webp",
    },
    {
      title: "Complete Haemogram.....",
      price: "₹ 279",
      description:
        "A CBC is a blood test that checks the overall health and dete...",
      link: "#",
      imgSrc:
        "https://res.cloudinary.com/dzkpb9csm/image/upload/v1719574942/HappyHealingDiagnostic/lab-worker-looking-at-vial-of-blood-scaled-1_sbggnk.jpg",
    },
    {
      title: "Aldosterone-Renin Ratio",
      price: "₹ 3999",
      description:
        "This test calculates the Aldosterone and Renin levels in the blood, helping......",
      link: "#",
      imgSrc:
        "https://res.cloudinary.com/dzkpb9csm/image/upload/v1719575761/HappyHealingDiagnostic/pexels-photo-3902732_u1qdaa.webp",
    },
  ];

  return (
    <div className="py-6">
      <p className="font-bold w-[22%] text-center mx-auto mobile:w-full mobile:text-center text-3xl py-10">
        Health Packages
      </p>
      <div className="grid grid-cols-4 mobile:grid mobile:grid-cols-1 gap-6  px-24 mobile:px-2">
        {tests.map((test, index) => (
          <div className="py-8">
            <a href={test.link} className="block">
              <Card className="group w-full mobile:w-full max-w-sm rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow ">
                <div className="h-1/2 w-full">
                  <img
                    src={test.imgSrc}
                    alt={test.title}
                    className="w-full  h-[220px] object-cover "
                  />
                </div>
                <div className="p-4 bg-card text-card-foreground">
                  <h3 className="text-lg font-semibold group-hover:text-[#c50000]">{test.title}</h3>
                  <p className="text-xl font-bold text-gray-500 mt-2">{test.price}</p>
                </div>
                <div className="border-2"></div>
                <div className="flex items-center justify-center py-4">
                  <Button
                    variant="outline"
                    className="text-[#c50000] border border-[#c50000] p-4 mobile:p-2 "
                  >
                    View More
                  </Button>
                </div>
              </Card>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
