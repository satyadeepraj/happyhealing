"use client";
import Link from "next/link";
import {
  CarouselItem,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
  Carousel,
} from "@/components/ui/carousel";
import React, { createContext } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Slider() {
  return (
    <>
      <Carousel
        autoPlay
        className="h-full w-full"
        interval={5000}
        opts={{ loop: true, autoplay: true, pauseOnHover: false }}
      >
        <CarouselContent>
          <CarouselItem>
            <div className="relative h-full w-full overflow-hidden">
              <Image
                alt="Carousel Image 1"
                className="w-full  object-cover"
                height={700}
                src="https://res.cloudinary.com/dzkpb9csm/image/upload/v1719574942/HappyHealingDiagnostic/lab-worker-looking-at-vial-of-blood-scaled-1_sbggnk.jpg"
                style={{
                  aspectRatio: "1920/700",
                  objectFit: "cover",
                }}
                quality={100}
               
                width={1920}
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative h-full w-full overflow-hidden">
              <Image
                alt="Carousel Image 2"
                className="w-full  object-cover"
                height={700}
                src="https://res.cloudinary.com/dzkpb9csm/image/upload/v1719575761/HappyHealingDiagnostic/pexels-photo-248152_mgbatw.webp"
                style={{
                  aspectRatio: "1920/700",
                  objectFit: "cover",
                }}
                width={1920}
                quality={100}
               
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative h-full w-full overflow-hidden">
              <Image
                alt="Carousel Image 3"
                className="w-full  object-cover"
                height={700}
                src="https://res.cloudinary.com/dzkpb9csm/image/upload/v1719575762/HappyHealingDiagnostic/pexels-photo-356040_codtc4.webp"
                style={{
                  aspectRatio: "1920/700",
                  objectFit: "cover",
                }}
                width={1920}
                quality={100}
               
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative h-full w-full overflow-hidden">
              <Image
                alt="Carousel Image 3"
                className="w-full  object-cover"
                height={700}
                src="https://res.cloudinary.com/dzkpb9csm/image/upload/v1719575762/HappyHealingDiagnostic/pexels-photo-305565_ivviad.webp"
                style={{
                  aspectRatio: "1920/700",
                  objectFit: "cover",
                }}
                width={1920}
                quality={100}
               
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative h-full w-full overflow-hidden">
              <Image
                alt="Carousel Image 3"
                className="w-full  object-cover"
                height={700}
                src="https://res.cloudinary.com/dzkpb9csm/image/upload/v1719575761/HappyHealingDiagnostic/pexels-photo-3902732_u1qdaa.webp"
                style={{
                  aspectRatio: "1920/700",
                  objectFit: "cover",
                }}
                width={1920}
                quality={100}
               
              />
            </div>
          </CarouselItem>
        </CarouselContent>
      
      </Carousel>
    </>
  );
}
