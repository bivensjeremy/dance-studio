export const Video = ({children}) => {
  return (
    <div className="relative w-full h-full">
      <video
        playsInline
        autoPlay
        loop
        muted
        className="hidden md:flex object-cover absolute inset-0 w-full h-full z-[-1]"
      >
        <source src="/background_video.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
    <div className="absolute backdrop-blur-x  bg-background/30 inset-0 bg-linear-to-b from-transparent from-50% to-background" />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};