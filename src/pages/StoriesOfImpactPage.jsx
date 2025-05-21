import React, { useState, useEffect } from 'react';
import { FaPlay, FaTimes, FaQuoteLeft, FaQuoteRight, FaHeart, FaHandHoldingHeart, FaPrayingHands, FaGraduationCap, FaChild } from 'react-icons/fa';

// CSS for animations
const modalStyles = {
  '@keyframes fadeIn': {
    '0%': { opacity: 0 },
    '100%': { opacity: 1 }
  },
  '@keyframes slideUp': {
    '0%': { transform: 'translateY(50px)', opacity: 0 },
    '100%': { transform: 'translateY(0)', opacity: 1 }
  }
};

const StoriesOfImpactPage = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const [thumbnailsLoaded, setThumbnailsLoaded] = useState(false);

  // Stories data with YouTube links and expanded content
  const stories = [
    {
      id: 1,
      name: "MOREEN",
      videoUrl: "https://youtu.be/PcO-Zjslp8s",
      videoId: "PcO-Zjslp8s",
      quote: "I would always fall sick almost everyday",
      thumbnailUrl: "https://i.ytimg.com/vi/PcO-Zjslp8s/hqdefault.jpg",
      story: "Moreen's life was marked by constant illness and hardship. Living in a remote village with limited access to healthcare, she struggled daily. Through the support of our sponsors, Moreen now receives regular medical care, nutritious meals, and education. Her transformation has been remarkable - from a child who could barely attend school to a vibrant young student with dreams of becoming a nurse to help others.",
      age: 9,
      location: "Mbale, Uganda",
      interests: "Singing, reading, helping others"
    },
    {
      id: 2,
      name: "LOYCE",
      videoUrl: "https://youtu.be/nkpv3ftETtI",
      videoId: "nkpv3ftETtI",
      quote: "I never thought I would be able to go to school",
      thumbnailUrl: "https://i.ytimg.com/vi/nkpv3ftETtI/hqdefault.jpg",
      story: "Loyce lost both parents at a young age and was living with her elderly grandmother who struggled to provide for her basic needs. When she joined our program, Loyce had never attended school and felt hopeless about her future. Today, she is thriving in her education, has made many friends, and dreams of becoming a teacher to help other children in her community.",
      age: 11,
      location: "Kampala, Uganda",
      interests: "Mathematics, dancing, storytelling"
    },
    {
      id: 3,
      name: "GERALD",
      videoUrl: "https://youtu.be/JfQXs28brnY",
      videoId: "JfQXs28brnY",
      quote: "I now have hope for my future",
      thumbnailUrl: "https://i.ytimg.com/vi/JfQXs28brnY/hqdefault.jpg",
      story: "Gerald's journey began in extreme poverty, with no access to education or proper nutrition. His family struggled to provide even one meal a day. Through our sponsorship program, Gerald not only receives education and regular meals but has discovered his talent for music and leadership. He now leads the children's choir and mentors younger children, showing them that their circumstances don't define their potential.",
      age: 12,
      location: "Jinja, Uganda",
      interests: "Music, football, leadership"
    }
  ];

  // Additional success stories without videos
  const successStories = [
    {
      id: 4,
      name: "SARAH",
      image: "./photos/Berakhah-Child-care-980x586.jpg",
      quote: "I can now dream of a better future",
      story: "Sarah was abandoned as an infant and had no family to care for her. Through our program, she found not just shelter and education, but a loving community that has become her family. Sarah excels in her studies and has a particular talent for art and creative expression.",
      age: 8,
      highlight: "Academic Excellence"
    },
    {
      id: 5,
      name: "DAVID",
      image: "./photos/childrens_church-1-980x653.jpeg",
      quote: "I used to be afraid, but now I am brave",
      story: "David came to us after losing his parents to illness. Traumatized and withdrawn, he rarely spoke or interacted with others. Through patient care, counseling, and the support of his sponsors, David has blossomed into a confident, outgoing boy who loves to help others and share his story of hope.",
      age: 10,
      highlight: "Emotional Healing"
    },
    {
      id: 6,
      name: "GRACE",
      image: "./photos/childrens_church-8-980x735.jpeg",
      quote: "I want to be a doctor to help my community",
      story: "Grace lived in an area with no access to healthcare, which claimed the lives of several family members. Her determination to change this reality for her community drives her passion for learning. She excels in science subjects and is determined to become a doctor to serve her village.",
      age: 13,
      highlight: "Community Leadership"
    }
  ];

  // Set thumbnails as loaded immediately since we're using YouTube thumbnails
  useEffect(() => {
    setThumbnailsLoaded(true);
  }, []);

  // Success Story Card component
  const SuccessStoryCard = ({ story }) => {
    return (
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-gray-200">
        <div className="relative">
          <img
            src={story.image}
            alt={`${story.name}'s Story`}
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-10"></div>
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <h3 className="text-2xl font-bold">{story.name}</h3>
            <p className="text-sm">Age: {story.age}</p>
          </div>
          <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
            {story.highlight}
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-start mb-4">
            <FaQuoteLeft className="text-blue-600 mr-2 text-xl flex-shrink-0 mt-1" />
            <p className="italic text-gray-700">{story.quote}</p>
            <FaQuoteRight className="text-blue-600 ml-2 text-xl flex-shrink-0 mt-1" />
          </div>
          <p className="text-gray-600 mb-4">{story.story}</p>
          <a
            href="#/sponsor-child"
            className="inline-block w-full text-center px-6 py-3 bg-blue-600 text-white rounded-md font-bold hover:bg-blue-700 transition-colors shadow-md"
            style={{ color: 'white !important' }}
          >
            SPONSOR A CHILD LIKE {story.name}
          </a>
        </div>
      </div>
    );
  };

  // Video player component
  const VideoThumbnail = ({ story }) => {
    const playVideo = (e) => {
      e.preventDefault();
      e.stopPropagation(); // Prevent event bubbling
      setActiveVideo(story); // This will trigger the modal to open
    };

    return (
      <div className="flex flex-col h-full">
        <div
          className="relative group cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] flex-grow"
          onClick={playVideo}
          role="button"
          aria-label={`Play ${story.name}'s story video`}
        >
          <div className="aspect-video overflow-hidden rounded-lg shadow-lg">
            {/* Simple image thumbnail with play button overlay */}
            <div className="relative w-full h-full">
              {/* Container for the image */}
              <div className="w-full h-full bg-blue-200 relative" style={{ minHeight: "220px" }}>
                {thumbnailsLoaded ? (
                  <img
                    src={story.thumbnailUrl}
                    alt={`${story.name}'s Story Thumbnail`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ display: "block" }}
                    onError={(e) => {
                      console.error("Error loading high-quality thumbnail, trying standard quality");
                      e.target.onerror = (e2) => {
                        console.error("Error loading standard thumbnail, trying default thumbnail");
                        e2.target.onerror = (e3) => {
                          console.error("Error loading all thumbnails, using fallback image");
                          e3.target.onerror = null; // Prevent infinite loop
                          e3.target.src = "/photos/call2prayer.jpg"; // Final fallback image
                        };
                        e2.target.src = `https://i.ytimg.com/vi/${story.videoId}/default.jpg`; // Try default quality
                      };
                      e.target.src = `https://i.ytimg.com/vi/${story.videoId}/mqdefault.jpg`; // Try medium quality
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="animate-pulse bg-blue-300 w-full h-full"></div>
                  </div>
                )}

                {/* Play button overlay - positioned inside the image container */}
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  {/* Centered play button with enhanced styling */}
                  <div className="z-10">
                    <div className="w-20 h-20 rounded-full bg-red-600 bg-opacity-80 flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:bg-opacity-100 shadow-xl border-4 border-white border-opacity-70 group-hover:border-opacity-100">
                      {/* Play icon with slight offset for visual balance */}
                      <FaPlay className="text-white text-2xl ml-1.5" />
                    </div>
                  </div>
                </div>

                {/* Quote if available */}
                {story.quote && (
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-40 text-white transition-opacity duration-300 group-hover:bg-opacity-60">
                    <p className="italic text-lg font-semibold" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>{story.quote}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Hover border */}
            <div className="absolute inset-0 border-4 border-transparent group-hover:border-red-600 rounded-lg transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(220,38,38,0.6)]"></div>
          </div>
        </div>

        {/* Story details below the video */}
        <div className="mt-4 bg-white p-4 rounded-lg shadow-md border border-gray-200">
          <div className="flex items-center mb-2">
            <div className="bg-blue-100 p-2 rounded-full mr-2">
              <FaChild className="text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-semibold">Age: {story.age}</p>
              <p className="text-xs text-gray-600">{story.location}</p>
            </div>
          </div>
          <p className="text-gray-700 text-sm mb-3 line-clamp-3">{story.story}</p>
          <div className="flex items-center text-xs text-gray-600">
            <FaHeart className="text-blue-500 mr-1" />
            <p>Interests: {story.interests}</p>
          </div>
          <a
            href="#/sponsor-child"
            className="mt-3 inline-block w-full text-center px-4 py-2 bg-blue-600 text-white rounded-md font-bold text-sm hover:bg-blue-700 transition-colors shadow-md"
            style={{ color: 'white !important' }}
          >
            SPONSOR A CHILD LIKE {story.name}
          </a>
        </div>
      </div>
    );
  };

  // Video Modal component
  const VideoModal = ({ story, onClose }) => {
    if (!story) return null;

    // Use the videoId directly from the story object
    const youtubeId = story.videoId;

    // Handle errors with YouTube embed
    const [embedError, setEmbedError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    // Close modal when clicking outside the video
    const handleBackdropClick = (e) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    };

    // Handle close button click
    const handleCloseClick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      onClose();
    };

    // Close modal with escape key
    useEffect(() => {
      const handleEsc = (e) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };
      window.addEventListener('keydown', handleEsc);

      // Prevent scrolling when modal is open
      document.body.style.overflow = 'hidden';

      // Focus trap inside modal
      const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
      const modal = document.getElementById('video-modal');
      if (modal) {
        const firstFocusableElement = modal.querySelectorAll(focusableElements)[0];
        const focusableContent = modal.querySelectorAll(focusableElements);
        const lastFocusableElement = focusableContent[focusableContent.length - 1];

        // Focus first element
        if (firstFocusableElement) firstFocusableElement.focus();

        // Trap focus inside modal
        const trapFocus = (e) => {
          if (e.key === 'Tab') {
            if (e.shiftKey && document.activeElement === firstFocusableElement) {
              e.preventDefault();
              lastFocusableElement.focus();
            } else if (!e.shiftKey && document.activeElement === lastFocusableElement) {
              e.preventDefault();
              firstFocusableElement.focus();
            }
          }
        };

        modal.addEventListener('keydown', trapFocus);
        return () => {
          modal.removeEventListener('keydown', trapFocus);
          window.removeEventListener('keydown', handleEsc);
          document.body.style.overflow = 'auto';
        };
      }

      return () => {
        window.removeEventListener('keydown', handleEsc);
        document.body.style.overflow = 'auto';
      };
    }, [onClose]);

    return (
      <div
        id="video-modal"
        className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-[fadeIn_0.3s_ease-in-out]"
        onClick={handleBackdropClick}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className="relative w-full max-w-4xl animate-[slideUp_0.4s_ease-out]">
          <div className="flex justify-between items-center mb-4">
            <h3 id="modal-title" className="text-white text-xl font-bold">{story.name}'S STORY</h3>
            <button
              onClick={handleCloseClick}
              className="text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white bg-red-600 hover:bg-red-700 rounded-full w-10 h-10 flex items-center justify-center transition-colors"
              aria-label="Close video"
            >
              <FaTimes size={20} />
            </button>
          </div>
          <div className="aspect-video w-full rounded-lg overflow-hidden shadow-2xl">
            {embedError ? (
              // Error fallback
              <div className="w-full h-full bg-black flex items-center justify-center text-white p-8">
                <div className="text-center">
                  <p className="text-xl mb-4">Sorry, there was an error loading the video.</p>
                  <p>Please try watching directly on YouTube:</p>
                  <a
                    href={`https://www.youtube.com/watch?v=${youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                  >
                    Watch on YouTube
                  </a>
                </div>
              </div>
            ) : (
              // YouTube embed
              <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 border-4 border-red-600 border-t-transparent rounded-full animate-spin mb-4"></div>
                      <p className="text-white text-lg">Loading video...</p>
                    </div>
                  </div>
                )}
                <iframe
                  src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&modestbranding=1&rel=0&showinfo=1&fs=1`}
                  title={`${story.name}'s Story`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                  allowFullScreen
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: 'none'
                  }}
                  loading="lazy"
                  onLoad={() => setIsLoading(false)}
                  onError={() => {
                    setEmbedError(true);
                    setIsLoading(false);
                  }}
                ></iframe>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Background Image */}
      <div className="sponsor-hero-section">
        <div
          className="bg-image"
          style={{ backgroundImage: "url('./photos/Berakhah-Choir-2024-10.jpg')" }}
        ></div>
        <div className="overlay"></div>
        <div className="content">
          <div className="container mx-auto">
            <h1>STORIES OF IMPACT</h1>
            <h2>LIVES TRANSFORMED THROUGH LOVE AND SUPPORT</h2>
            <p>
              Meet the children whose lives have been transformed through the love and support of our sponsors and donors.
              Each story represents hope, resilience, and the power of compassion to change lives forever.
            </p>
            <a href="#/sponsor-child" className="cta-button">
              SPONSOR A CHILD TODAY
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Featured Video Stories Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-blue-900">
                FEATURED VIDEO STORIES
              </h2>
              <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Watch these powerful testimonies of transformation and hope. Each video tells the story of a child whose life has been forever changed.
              </p>
            </div>

            {/* Video Gallery - All stories in a grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {stories.map((story) => (
                <div key={story.id} className="flex flex-col h-full transform transition-all duration-300 hover:scale-[1.02]">
                  <div className="bg-blue-600 rounded-t-lg overflow-hidden shadow-lg">
                    <h2 className="text-xl font-bold text-white py-3 px-4 text-center border-b border-blue-700">
                      {story.name}'S STORY
                    </h2>
                  </div>
                  <div className="flex-grow bg-white p-4 rounded-b-lg shadow-lg">
                    <VideoThumbnail story={story} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Impact Statistics */}
          <div className="text-white rounded-xl shadow-lg overflow-hidden mb-20" style={{ background: 'linear-gradient(135deg, #1E3A8A 0%, #5D4BA0 100%)' }}>
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-8 text-center">Our Impact</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2 text-white">700+</div>
                  <div className="text-xl">Children Supported</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2 text-white">100%</div>
                  <div className="text-xl">School Attendance</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2 text-white">1000+</div>
                  <div className="text-xl">Rural Pastors</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2 text-white">24/7</div>
                  <div className="text-xl">Loving Care</div>
                </div>
              </div>
            </div>
          </div>

          {/* Success Stories Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-blue-900">
                SUCCESS STORIES
              </h2>
              <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These children have overcome incredible challenges and are now thriving thanks to the support of our sponsors and donors.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {successStories.map((story) => (
                <SuccessStoryCard key={story.id} story={story} />
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl" style={{ background: 'linear-gradient(135deg, #1E3A8A 0%, #5D4BA0 100%)' }}>
            <div className="p-8 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Make a Difference Today</h2>
              <p className="mb-6 text-lg">
                Your support can transform a child's life. Consider sponsoring a child or making a donation to help us continue our work.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <a
                  href="#/sponsor-child"
                  className="inline-block px-8 py-4 bg-blue-600 text-white rounded-md font-bold text-xl hover:bg-blue-700 transition-colors shadow-lg"
                  style={{ color: 'white !important' }}
                >
                  SPONSOR A CHILD
                </a>
                <a
                  href="#/donate"
                  className="inline-block px-8 py-4 bg-blue-600 text-white rounded-md font-bold text-xl hover:bg-blue-700 transition-colors shadow-lg"
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
