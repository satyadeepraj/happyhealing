"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { useState } from "react";



export function AnnouncementCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalItems = 7; // Total number of carousel items

  const handleSlideChange = (newIndex) => {
    setActiveIndex(newIndex);
  };

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  };

  return (
    <div className="bg-slate-200 pt-40 pb-28">
    <Carousel
      interval={1000}
      autoplay
      className="w-[90%] mx-auto"
      opts={{
        align: "start",
        loop:true,

      }}
      onSlideChange={handleSlideChange}
      activeIndex={activeIndex}
    >
      <CarouselContent>
        <CarouselItem  className="md:basis-1/2 lg:basis-1/2">
          <div className="grid grid-cols-2 rounded-lg overflow-hidden bg-red-500 text-white">
            <img
              src="https://res.cloudinary.com/dzkpb9csm/image/upload/v1719575762/HappyHealingDiagnostic/pexels-photo-356040_codtc4.webp"
              alt="Card Image"
              className="object-cover w-full h-full"
            />
            <div className="p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold">Home Sample Collection</h3>
                <p className="mt-2">Book a health checkup</p>
              </div>
              <Button variant="link" className="justify-self-end bg-white text-red-500">
                Book Now
              </Button>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/2">
          <div className="grid grid-cols-2 rounded-lg overflow-hidden bg-red-500 text-white">
            <img
              src="https://res.cloudinary.com/dzkpb9csm/image/upload/v1719575761/HappyHealingDiagnostic/pexels-photo-248152_mgbatw.webp"
              alt="Card Image"
              className="object-cover w-full h-full"
            />
            <div className="p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold">Now in Ghaziabad</h3>
                <p className="mt-2">All Diagnostics & Pathology services available</p>
              </div>
              <Button variant="link" className="justify-self-end bg-white text-red-500">
                Read More
              </Button>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/2">
          <div className="grid grid-cols-2 rounded-lg overflow-hidden bg-red-500 text-white">
            <img
              src="https://res.cloudinary.com/dzkpb9csm/image/upload/v1719575761/HappyHealingDiagnostic/pexels-photo-3902732_u1qdaa.webp"
              alt="Card Image"
              className="object-cover w-full h-full"
            />
            <div className="p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold">Now in Ghaziabad</h3>
                <p className="mt-2">All Diagnostics & Pathology services available</p>
              </div>
              <Button variant="link" className="justify-self-end bg-white text-red-500">
                Read More
              </Button>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/2">
          <div className="grid grid-cols-2 rounded-lg overflow-hidden bg-red-500 text-white">
            <img
              src="https://res.cloudinary.com/dzkpb9csm/image/upload/v1719687265/HappyHealingDiagnostic/pexels-photo-4226924_lw1qkt.webp"
              alt="Card Image"
              className="object-cover w-full h-full "
            />
            <div className="p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold">Now in Ghaziabad</h3>
                <p className="mt-2">All Diagnostics & Pathology services available</p>
              </div>
              <Button variant="link" className="justify-self-end bg-white text-red-500">
                Read More
              </Button>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/2">
          <div className="grid grid-cols-2 rounded-lg overflow-hidden bg-red-500 text-white">
            <img
              src="https://res.cloudinary.com/dzkpb9csm/image/upload/v1719574942/HappyHealingDiagnostic/lab-worker-looking-at-vial-of-blood-scaled-1_sbggnk.jpg"
              alt="Card Image"
              className="object-cover w-full h-full "
            />
            <div className="p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold">Now in Ghaziabad</h3>
                <p className="mt-2">All Diagnostics & Pathology services available</p>
              </div>
              <Button variant="link" className="justify-self-end bg-white text-red-500">
                Read More
              </Button>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/2">
          <div className="grid grid-cols-2 rounded-lg overflow-hidden bg-red-500 text-white">
            <img
              src="https://res.cloudinary.com/dzkpb9csm/image/upload/v1719691504/HappyHealingDiagnostic/woman-2141808_640_synbqc.jpg"
              alt="Card Image"
              className="object-cover w-full h-full"
            />
            <div className="p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold">Now in Ghaziabad</h3>
                <p className="mt-2">All Diagnostics & Pathology services available</p>
              </div>
              <Button variant="link" className="justify-self-end bg-white text-red-500">
                Read More
              </Button>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/2">
          <div className="grid grid-cols-2 rounded-lg overflow-hidden bg-red-500 text-white">
            <img
              src="https://res.cloudinary.com/dzkpb9csm/image/upload/v1719690956/HappyHealingDiagnostic/laboratory-2815641_1280_cythhe.jpg"
              alt="Card Image"
              className="object-cover w-full h-full"
            />
            <div className="p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold">Now in Ghaziabad</h3>
                <p className="mt-2">All Diagnostics & Pathology services available</p>
              </div>
              <Button variant="link" className="justify-self-end bg-white text-red-500">
                Read More
              </Button>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious  />
      <CarouselNext />
    
      
    </Carousel>
    <div className="flex justify-center mt-12">
        {Array.from({ length: totalItems }).map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 mx-1 rounded-full ${
              index === activeIndex ? 'bg-red-500' : 'bg-gray-300'
            }`}
            onClick={() => handleSlideChange(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}
