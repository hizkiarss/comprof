import React from 'react'

const FrozenVideo = () => {
  return (
    <div  className="relative flex items-center justify-center h-screen bg-transparent ">
      <div className="h-screen bg-transparent  bg-fixed bg-cover bg-center bg-no-repeat">
                        {/* For video background, you'd need custom CSS */}
                        <video 
                            src="Sosmed 1.mp4" 
                            className="absolute inset-0 h-screen object-cover w-[1130px] "
                            autoPlay
                            loop
                            muted
                        />
                        
                        {/* Optional overlay content */}
                       
                    </div>
    </div>
  )
}

export default FrozenVideo
