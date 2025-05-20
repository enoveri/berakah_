import React, { useState } from 'react';
import { FaPlay, FaTimes } from 'react-icons/fa';
import ReactPlayer from 'react-player/youtube';

const StoriesOfImpactPage = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  // Stories data with YouTube links
  const stories = [
    {
      id: 1,
      name: "MOREEN",
      videoUrl: "https://www.youtube.com/watch?v=PcO-Zjslp8s",
      thumbnailUrl: "https://img.youtube.com/vi/PcO-Zjslp8s/maxresdefault.jpg",
      quote: "I would always fall sick almost everyday"
    },
    {
      id: 2,
      name: "LOYCE",
      videoUrl: "https://www.youtube.com/watch?v=nkpv3ftETtI",
      thumbnailUrl: "https://img.youtube.com/vi/nkpv3ftETtI/maxresdefault.jpg",
      quote: ""
    },
    {
      id: 3,
      name: "GERALD",
      videoUrl: "https://www.youtube.com/watch?v=JfQXs28brnY",
      thumbnailUrl: "https://img.youtube.com/vi/JfQXs28brnY/maxresdefault.jpg",
      quote: ""
    }
  ];

  // Video player component
  const VideoThumbnail = ({ story }) => {
    const playVideo = () => {
      setActiveVideo(story);
    };

    return (
      <div className="relative group cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]" onClick={playVideo}>
        <div className="aspect-video overflow-hidden rounded-lg">
          <img
            src={story.thumbnailUrl}
            alt={`${story.name}'s Story`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-full bg-blue-600 bg-opacity-90 flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:bg-opacity-100">
                <FaPlay className="text-white text-xl ml-1" />
              </div>
            </div>
          </div>
          {story.quote && (
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-60 text-white transition-opacity duration-300 group-hover:bg-opacity-70">
              <p className="italic text-lg">{story.quote}</p>
            </div>
          )}
          <div className="absolute inset-0 border-4 border-transparent group-hover:border-blue-500 rounded-lg transition-all duration-300"></div>
        </div>
      </div>
    );
  };

  // Video Modal component
  const VideoModal = ({ story, onClose }) => {
    if (!story) return null;

    // Close modal when clicking outside the video
    const handleBackdropClick = (e) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    };

    // Close modal with escape key
    React.useEffect(() => {
      const handleEsc = (e) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };
      window.addEventListener('keydown', handleEsc);

      // Prevent scrolling when modal is open
      document.body.style.overflow = 'hidden';

      return () => {
        window.removeEventListener('keydown', handleEsc);
        document.body.style.overflow = 'auto';
      };
    }, [onClose]);

    return (
      <div
        className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
        onClick={handleBackdropClick}
      >
        <div className="relative w-full max-w-4xl animate-fadeIn">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-white text-xl font-bold">{story.name}'S STORY</h3>
            <button
              onClick={onClose}
              className="text-white hover:text-gray-300 focus:outline-none bg-red-600 hover:bg-red-700 rounded-full w-8 h-8 flex items-center justify-center transition-colors"
              aria-label="Close video"
            >
              <FaTimes size={18} />
            </button>
          </div>
          <div className="aspect-video w-full rounded-lg overflow-hidden shadow-2xl">
            <ReactPlayer
              url={story.videoUrl}
              width="100%"
              height="100%"
              controls
              playing
              config={{
                youtube: {
                  playerVars: {
                    showinfo: 1,
                    rel: 0
                  }
                }
              }}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">
              <span className="text-gray-800">STORIES OF </span>
              <span className="text-gray-700">IMPACT</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A few of our children whose lives have been transformed by the love and support of our sponsors and
              donors around the world. We couldn't be more proud.
            </p>
          </div>

          {/* Video Gallery - All stories in a grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {stories.map((story) => (
              <div key={story.id} className="flex flex-col bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <h2 className="text-xl font-bold text-gray-800 py-3 px-4 text-center border-b">
                  {story.name}'S STORY
                </h2>
                <div className="p-4">
                  <VideoThumbnail story={story} />
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="bg-[#A6CFFF] rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl">
            <div className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-4 text-black">Make a Difference Today</h2>
              <p className="mb-6 text-black text-lg">
                Your support can transform a child's life. Consider sponsoring a child or making a donation to help us continue our work.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <a
                  href="/sponsor-child"
                  className="inline-block px-8 py-4 bg-blue-700 text-white rounded-md font-bold text-xl hover:bg-blue-800 transition-colors shadow-lg border-2 border-black"
                  style={{ color: 'white !important' }}
                >
                  SPONSOR A CHILD
                </a>
                <a
                  href="/donate"
                  className="inline-block px-8 py-4 bg-green-700 text-white rounded-md font-bold text-xl hover:bg-green-800 transition-colors shadow-lg border-2 border-black"
                  style={{ color: 'white !important' }}
                >
                  DONATE NOW
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <VideoModal
          story={activeVideo}
          onClose={() => setActiveVideo(null)}
        />
      )}
    </div>
  );
};

export default StoriesOfImpactPage;
