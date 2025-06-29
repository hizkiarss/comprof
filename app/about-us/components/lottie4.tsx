"use client"
import Lottie from "lottie-react";
import animationData from "@/public/Lottie/lottie1.json"

export default function Lottie4() {
  return (
    <div className="w-96 h-96">
      <Lottie animationData={animationData} loop autoplay />
    </div>
  );
}