import React from 'react';

const VideoBackground = ({ fallbackImage }) => {
  // Use YouTube as a reliable video source
  const youtubeVideoId = "JDhTWRa--3I"; // Using a Watoto Church video as an example

  return (
    <>
      {/* Fallback background image - always visible */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${fallbackImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0
        }}
      />

      {/* YouTube video background - using proper responsive container */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ zIndex: 1 }}
      >
        <div className="youtube-background">
          <iframe
            src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&controls=0&showinfo=0&rel=0&loop=1&playlist=${youtubeVideoId}&mute=1&modestbranding=1&iv_load_policy=3&disablekb=1&playsinline=1`}
            title="Background Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Add inline styles to ensure the YouTube background works */}
        <style jsx="true">{`
          .youtube-background {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            overflow: hidden;
          }

          .youtube-background iframe {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 100vw;
            height: 100vh;
            transform: translate(-50%, -50%) scale(1.5);
            pointer-events: none;
          }

          @media (min-aspect-ratio: 16/9) {
            .youtube-background iframe {
              /* height = 100 * (9/16) = 56.25 */
              height: 56.25vw;
              width: 100vw;
              transform: translate(-50%, -50%) scale(1.5);
            }
          }

          @media (max-aspect-ratio: 16/9) {
            .youtube-background iframe {
              /* width = 100 / (9/16) = 177.78 */
              width: 177.78vh;
              height: 100vh;
              transform: translate(-50%, -50%) scale(1.5);
            }
          }
        `}</style>
      </div>

      {/* Dark overlay */}
      <div
        className="absolute inset-0 bg-black"
        style={{
          opacity: 0.5,
          zIndex: 2
        }}
      />
    </>
  );
};

export default VideoBackground;
