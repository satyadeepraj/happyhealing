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

export function TestCarousel() {
  const tests = [
    { title: "Total Care Checkup", price: "₹ 1999", description: "Total Care Checkup is one of the most popular health check...", link: "#", },
    { title: "Allergy Comprehensive Profile", price: "₹ 9499", description: "It is an advanced test that is designed to assess a...", link: "#", },
    { title: "Allergy Pediatric Profile", price: "₹ 4999", description: "It is common for children to have adverse reactions to certain foo...", link: "#", },
    { title: "Digital Chest X-Ray", price: "₹ 249 - ₹ 498", description: "A Digital Chest X Ray is a modern technique that uses sensors...", link: "#", },
    { title: "Total Care Checkup", price: "₹ 1999", description: "Total Care Checkup is one of the most popular health check...", link: "#", },
    { title: "Allergy Comprehensive Profile", price: "₹ 9499", description: "It is an advanced test that is designed to assess a...", link: "#", },
    { title: "Allergy Pediatric Profile", price: "₹ 4999", description: "It is common for children to have adverse reactions to certain foo...", link: "#", },
    { title: "Digital Chest X-Ray", price: "₹ 249 - ₹ 498", description: "A Digital Chest X Ray is a modern technique that uses sensors...", link: "#", },
  ];

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true
      }}
      className="w-full max-w-6xl mx-auto py-20"
    > <p className="font-bold w-[20%] mx-auto text-3xl">Popular Tests</p>
      <CarouselContent>
       
        {tests.map((test, index) => (
          <CarouselItem key={index} className="md:basis-1/4">
            <div className="py-8">
              <Card>
                <CardContent className="">
                  <h3 className="text-lg font-semibold">{test.title}</h3>
                  <p className="text-gray-500">{test.description}</p>
                  <p className="text-xl font-bold mt-2">{test.price}</p>
                  <a href={test.link} className="text-red-500 font-semibold mt-4 inline-block">Know More</a>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="ml-8 bg" />
      <CarouselNext className="mr-8" />
    </Carousel>
  )
}
