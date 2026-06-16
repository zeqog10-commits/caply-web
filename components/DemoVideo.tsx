"use client";

import { useRef, useState } from "react";
import Image from "next/image";

// Le bloc noir démo.
// PAS d'autoplay. La vidéo attend, affiche le poster + ton bouton play (play.png).
// Clic = lecture avec son. Re-clic = pause. Zéro friction.
export default function DemoVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(false);

  // La vidéo est déjà coupée pour commencer juste avant les sous-titres.
  function toggle() {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      v.muted = false;
      v.play();
      setStarted(true);
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  }

  return (
    <div className="group relative aspect-[16/10] w-full overflow-hidden rounded-[40px] bg-black ring-1 ring-white/10 sm:rounded-[56px]">
      <video
        ref={ref}
        className="h-full w-full object-cover"
        src="/demo.mp4"
        poster="/demo-poster.jpg"
        playsInline
        preload="metadata"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => {
          setPlaying(false);
          setStarted(false);
        }}
      />

      {/* Overlay cliquable : tout le bloc déclenche play/pause */}
      <button
        onClick={toggle}
        aria-label={playing ? "Pause" : "Play"}
        className="absolute inset-0 flex items-center justify-center"
      >
        {/* Voile sombre quand en pause, pour faire ressortir le bouton */}
        <span
          className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${
            playing ? "opacity-0" : "opacity-100"
          }`}
        />

        {/* Ton bouton play (PNG) */}
        <span
          className={`relative transition-all duration-300 ${
            playing
              ? "scale-90 opacity-0 group-hover:opacity-100"
              : "scale-100 opacity-100"
          }`}
        >
          {playing ? (
            // pause (apparaît au survol pendant la lecture)
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 text-black shadow-lg sm:h-20 sm:w-20">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <rect x="5" y="4" width="4" height="14" rx="1.5" fill="currentColor" />
                <rect x="13" y="4" width="4" height="14" rx="1.5" fill="currentColor" />
              </svg>
            </span>
          ) : (
            <Image
              src="/play.png"
              alt="Play"
              width={88}
              height={88}
              className="h-16 w-16 drop-shadow-lg sm:h-20 sm:w-20"
              priority
            />
          )}
        </span>
      </button>
    </div>
  );
}
