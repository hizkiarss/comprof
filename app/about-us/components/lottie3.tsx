"use client"
import Lottie from "lottie-react";
import animationData from "@/public/Lottie/lottie3.json"

export default function Lottie3() {
  return (
     <div className=" ">
      <Lottie className=" w-[330px] "  animationData={animationData} loop autoplay />
    </div>
  );
}