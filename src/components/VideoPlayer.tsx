"use client";

interface VideoPlayerProps {
  src: string;
  poster?: string;
  style?: React.CSSProperties;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, poster, style }) => {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      poster={poster}
      style={style}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};