"use client"
import Lottie from "lottie-react";
import animationData from "@/public/Lottie/lottie1.json"





export default function Lottie1() {
  return (
    <div className=" ">
      <Lottie className=" w-[200px] "  animationData={animationData} loop autoplay />
    </div>
  );
}