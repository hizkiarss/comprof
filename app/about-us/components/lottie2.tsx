"use client"
import Lottie from "lottie-react";
import animationData from "@/public/Lottie/lottie2.json"

export default function Lottie2
() {
  return (
    <div className=" ">
      <Lottie className=" w-[250px] "  animationData={animationData} loop autoplay />
    </div>
  );
}