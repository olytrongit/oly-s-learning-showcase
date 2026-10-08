import { useState } from "react";
import { Play } from "lucide-react";

export function LazyVideo({ title, youtubeId, poster }: { title: string; youtubeId: string; poster?: string | undefined }) {
  const [playing, setPlaying] = useState(false);
  const label = /video$/i.test(title.trim()) ? `Play ${title}` : `Play ${title} video`;

  if (playing) {
    return <iframe className="lazy-video" src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`} title={title} allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen />;
  }

  return (
    <button className="video-poster" type="button" onClick={() => setPlaying(true)} aria-label={label}>
      {poster ? <img src={poster} alt="" loading="lazy" /> : <span className="video-poster__fill" aria-hidden="true" />}
      <span><Play aria-hidden="true" /> Play video</span>
    </button>
  );
}
