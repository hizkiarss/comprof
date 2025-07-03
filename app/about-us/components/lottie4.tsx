  "use client"
  import Lottie from "lottie-react";
  import animationData from "@/public/Lottie/lottie4.json"

  export default function Lottie4() {
    return (
      <div className="w-40 ">
        <Lottie animationData={animationData} loop autoplay   />
      </div>
    );
  }