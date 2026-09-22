"use client";

import styles from "./Courses.module.scss";

// Accepts a YouTube URL (watch, youtu.be, shorts, embed) or a direct video file (/videos/x.mp4).
function youtubeId(url: string) {
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/|live\/)|youtu\.be\/)([\w-]{11})/,
  );
  return match?.[1];
}

export function CourseVideo({ src, title }: { src: string; title: string }) {
  const id = youtubeId(src);
  const vertical = /\/shorts\//.test(src);

  return (
    <div id="video" className={vertical ? styles.videoVertical : styles.video}>
      {id ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        />
      ) : (
        <video src={src} controls playsInline preload="metadata" title={title} />
      )}
    </div>
  );
}
