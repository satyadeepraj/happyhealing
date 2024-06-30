"use client"
import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function HealthCarousel() {
  const tests = [
    { 
      title: "Allergy Respiratory Scree", 
      price: "₹ 3999", 
      description: "It is a specialised screening test that helps assess respiratory......", 
      link: "#", 
      imgSrc: "https://res.cloudinary.com/dzkpb9csm/image/upload/v1719687474/HappyHealingDiagnostic/woman-8663875_640_osvzaw.webp"
    },
    { 
      title: "Food Allergy Screening", 
      price: "₹ 3999", 
      description: "A simple blood test for food allergy can show sensitisation to cert...", 
      link: "#", 
      imgSrc: "https://res.cloudinary.com/dzkpb9csm/image/upload/v1719687674/HappyHealingDiagnostic/ai-generated-8757192_640_i8tplu.webp"
    },
    { 
      title: "Complete Haemogram.....", 
      price: "₹ 279", 
      description: "A CBC is a blood test that checks the overall health and dete...", 
      link: "#", 
      imgSrc: "https://res.cloudinary.com/dzkpb9csm/image/upload/v1719574942/HappyHealingDiagnostic/lab-worker-looking-at-vial-of-blood-scaled-1_sbggnk.jpg"
    },
    { 
      title: "Aldosterone-Renin Ratio", 
      price: "₹ 3999", 
      description: "This test calculates the Aldosterone and Renin levels in the blood, helping ....", 
      link: "#", 
      imgSrc: "https://res.cloudinary.com/dzkpb9csm/image/upload/v1719575761/HappyHealingDiagnostic/pexels-photo-3902732_u1qdaa.webp"
    },
    { 
        title: "Allergy Respiratory Scree", 
        price: "₹ 3999", 
        description: "It is a specialised screening test that helps assess respiratory.......", 
        link: "#", 
        imgSrc: "https://res.cloudinary.com/dzkpb9csm/image/upload/v1719687474/HappyHealingDiagnostic/woman-8663875_640_osvzaw.webp"
      },
      { 
        title: "Food Allergy Screening", 
        price: "₹ 3999", 
        description: "A simple blood test for food allergy can show sensitisation to cert...", 
        link: "#", 
        imgSrc: "https://res.cloudinary.com/dzkpb9csm/image/upload/v1719687674/HappyHealingDiagnostic/ai-generated-8757192_640_i8tplu.webp"
      },
      { 
        title: "Complete Haemogram.....", 
        price: "₹ 279", 
        description: "A CBC is a blood test that checks the overall health and dete...", 
        link: "#", 
        imgSrc: "https://res.cloudinary.com/dzkpb9csm/image/upload/v1719574942/HappyHealingDiagnostic/lab-worker-looking-at-vial-of-blood-scaled-1_sbggnk.jpg"
      },
      { 
        title: "Aldosterone-Renin Ratio", 
        price: "₹ 3999", 
        description: "This test calculates the Aldosterone and Renin levels in the blood, helping......", 
        link: "#", 
        imgSrc: "https://res.cloudinary.com/dzkpb9csm/image/upload/v1719575761/HappyHealingDiagnostic/pexels-photo-3902732_u1qdaa.webp"
      },
  ];

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true
      }}
      className="w-full max-w-6xl mx-auto "
    ><p className="font-bold w-[22%] mx-auto text-3xl">Health Packages</p>
      <CarouselContent >
        
        {tests.map((test, index) => (
          <CarouselItem key={index} className="md:basis-1/4">
            <div className="py-8">
            <a href={test.link} className="block">
              <Card className="w-full max-w-sm rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow ">
              
                <div className="h-1/2 w-full">
                  <img src={test.imgSrc} alt={test.title} className="w-full h-40 object-cover " />
                  </div>
                  <div className="p-4 bg-card text-card-foreground">
                  <h3 className="text-lg font-semibold">{test.title}</h3>
                  <p className="text-gray-500">{test.description}</p>
                  <p className="text-xl font-bold mt-2">{test.price}</p>
                 </div>
               
              </Card>
              </a>
            </div>
            
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="ml-8 bg-[#c50000] text-white" />
      <CarouselNext className="mr-8 bg-[#c50000] text-white"/>
    </Carousel>
  )
}
