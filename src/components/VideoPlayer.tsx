"use client";

interface VideoPlayerProps {
  src: string;
  style?: React.CSSProperties;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, style }) => {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      onError={(e) => {
        console.error("Video failed to load:", src);
        console.error("Error details:", e);
      }}
      onLoadStart={() => console.log("Video loading started:", src)}
      onCanPlay={() => console.log("Video can play:", src)}
      style={style}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};