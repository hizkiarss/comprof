"use client"
import React from 'react'
import MetaBalls from '@/app/components/metaBalls'
const Divider = () => {
    return (
        <div className="bg-black rounded-xl border-0 h-[200px] w-full relative overflow-hidden mt-10">
            <MetaBalls
                color="#ffffff"
                cursorBallColor="#ffffff"
                cursorBallSize={2}
                ballCount={20}
                animationSize={8}
                enableMouseInteraction={true}
                enableTransparency={true}
                hoverSmoothness={0.05}
                clumpFactor={1}
                speed={0.3}
            />
        </div>
    )
}

export default Divider
